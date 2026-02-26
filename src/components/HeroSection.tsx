import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: { text: string; link: string };
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Book Free Consultation",
  ctaLink = "/contact",
  secondaryCta,
}: HeroSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${backgroundImage})`, y }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,60%,10%)]/95 via-[hsl(218,60%,10%)]/85 to-[hsl(218,60%,10%)]/65" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gold rounded-full mb-6"
          />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-10 py-4 rounded-md transition-all duration-300 text-base hover:shadow-gold hover:translate-y-[-2px]"
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.link}
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold font-semibold px-10 py-4 rounded-md transition-all duration-300 text-base"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
