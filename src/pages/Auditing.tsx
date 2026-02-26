import { motion } from "framer-motion";
import { Search, Shield, FileCheck, Eye, AlertTriangle, ClipboardList } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroAuditing from "../assets/hero-auditing.jpg";

const auditServices = [
  { icon: Search, title: "Statutory Audits", desc: "Independent examination of financial statements to ensure accuracy and compliance with accounting standards." },
  { icon: Shield, title: "Internal Audits", desc: "Evaluation of internal controls, risk management, and governance processes to improve operational efficiency." },
  { icon: FileCheck, title: "Compliance Audits", desc: "Assessment of adherence to laws, regulations, and internal policies for full regulatory compliance." },
  { icon: Eye, title: "Forensic Audits", desc: "Detailed investigations to detect fraud, financial irregularities, and operational mismanagement." },
  { icon: AlertTriangle, title: "Risk Assessment", desc: "Identification and evaluation of financial risks with recommendations for effective mitigation strategies." },
  { icon: ClipboardList, title: "Due Diligence", desc: "Thorough financial evaluations for mergers, acquisitions, and investments ensuring informed decisions." },
];

const Auditing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Best Auditing Services in Kenya"
        subtitle="We provide thorough and independent auditing services. Trust our experienced auditors to ensure your business meets all regulatory compliance requirements."
        backgroundImage={heroAuditing}
      />

      <StatsSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Best Auditing and Accounting Firm in Kenya" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gichuri & Partners provides trusted audit services to enhance financial transparency, risk management, and regulatory compliance. We provide objective and independent audits of financial statements to ensure accuracy and compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our audit assurance services enhance business credibility, fostering trust with investors, regulatory bodies, and key stakeholders across different industries. We work with businesses of all sizes, from SMEs to large corporations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our professionals are highly skilled in accounting and auditing, offering precise financial insights. We conduct in-depth audits to ensure accuracy and compliance with Kenyan laws, helping businesses maintain accountability at all times.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Audit Services" subtitle="Comprehensive auditing solutions for total financial transparency." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-premium transition-all hover:border-gold/30"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Auditing;
