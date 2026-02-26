import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import ConsultationForm from "../components/ConsultationForm";
import heroContact from "../assets/hero-contact.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["College House, 3rd Floor.", "University Way, Nairobi Kenya."],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["help@gichuripartners.com", "info@gichuripartners.com"],
    links: ["mailto:help@gichuripartners.com", "mailto:info@gichuripartners.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["Business Enquiries: +254 711 82 71 49", "Customer Service: +254 702 13 13 13"],
    links: ["tel:+254711827149", "tel:+254702131313"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Friday: 8:00 AM – 6:00 PM", "Saturday & Sunday: Closed", "Holidays: Closed"],
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Talk to The Best Tax Consultants in Nairobi Kenya!"
        subtitle="We value your questions! For inquiries that need a detailed response, we'll get back to you within 48 hours."
        backgroundImage={heroContact}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-gold rounded-full mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Get in <span className="text-gold">Touch</span>
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                      {info.lines.map((line, i) => (
                        info.links ? (
                          <a
                            key={i}
                            href={info.links[i]}
                            className="block text-muted-foreground text-sm hover:text-gold transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground text-sm">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-8 shadow-premium"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Request A Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                You can give us a call, send us an email, or walk into our office.
              </p>
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted">
        <div className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176269!2d36.8172!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0OScwMS45IkU!5e0!3m2!1sen!2ske!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gichuri & Partners Location"
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
