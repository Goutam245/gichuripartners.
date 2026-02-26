import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";

const testimonials = [
  { name: "Serah Kariuki", role: "Managing Director", company: "Kariuki Dental Clinic", quote: "Gichuri & Partners transformed how we handle our taxes. Their professionalism and expertise are unmatched. They saved us significant money through proper tax planning.", photo: testimonial1, rating: 5 },
  { name: "Peter Maina", role: "CEO & Founder", company: "Maina Ventures Ltd", quote: "The best tax consultants in Kenya. They simplified our complex tax situation and saved us both time and money. Their team is always available when we need them.", photo: testimonial2, rating: 5 },
  { name: "Wambui Njoroge", role: "Operations Manager", company: "Njoroge Contractors", quote: "Their team is incredibly knowledgeable and responsive. They helped us achieve full KRA compliance with ease and represented us successfully in a tax audit.", photo: testimonial3, rating: 5 },
  { name: "Grace Ochieng", role: "Finance Director", company: "Lakeside Enterprises", quote: "We've worked with Gichuri & Partners for over 5 years. Their expertise in Kenyan tax law is exceptional. They handle our auditing and tax advisory with great professionalism.", photo: testimonial4, rating: 5 },
  { name: "James Kamau", role: "Managing Partner", company: "Kamau & Associates Law Firm", quote: "As a law firm, we needed tax consultants who understand the legal landscape. Gichuri & Partners exceeded our expectations with their comprehensive tax compliance services.", photo: testimonial5, rating: 5 },
  { name: "Aisha Mohammed", role: "Business Owner", company: "Aisha Fashion House", quote: "From KRA pin registration to monthly bookkeeping, they handle everything seamlessly. I can focus on growing my business while they take care of all tax matters.", photo: testimonial6, rating: 5 },
  { name: "David Omondi", role: "Chief Financial Officer", company: "TechBridge Kenya", quote: "Their payroll services and tax advisory are top-notch. They helped us structure our employee benefits in the most tax-efficient way possible. Outstanding service!", photo: testimonial7, rating: 5 },
  { name: "Faith Wanjiku", role: "Founder", company: "Wanjiku Properties", quote: "Gichuri & Partners helped me navigate the complex world of property taxation in Kenya. Their advice on capital gains tax and VAT was invaluable for my real estate business.", photo: testimonial8, rating: 5 },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 bg-navy overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm">
            Trusted by thousands of businesses across Kenya for tax, accounting, and business advisory services.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-navy-light border border-primary-foreground/10 rounded-xl p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                      ))}
                    </div>
                    <div className="font-semibold text-primary-foreground text-sm">{t.name}</div>
                    <div className="text-gold text-xs">{t.role}</div>
                    <div className="text-primary-foreground/50 text-xs">{t.company}</div>
                  </div>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mt-4 italic">
                  "{t.quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots only */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-primary-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
