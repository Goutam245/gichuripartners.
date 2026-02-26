import { motion } from "framer-motion";
import ConsultationForm from "./ConsultationForm";

const CTASection = () => {
  return (
    <section className="bg-navy py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Got questions?<br />
              <span className="text-gold">We're here to help!</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Get expert help from the best tax consultants in Kenya, always ready to answer your questions and guide you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/254711827149"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-background font-semibold px-6 py-3 rounded-md transition-all text-sm"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+254711827149"
                className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-secondary-foreground font-semibold px-6 py-3 rounded-md transition-all text-sm"
              >
                +254 711 827 149
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-lg p-8 shadow-premium"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">Request A Free Consultation</h3>
            <p className="text-muted-foreground text-sm mb-6">Fill the form below and we'll get back to you within 48 hours.</p>
            <ConsultationForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
