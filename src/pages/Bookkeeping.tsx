import { motion } from "framer-motion";
import { BookOpen, FileText, Calculator, TrendingUp, ClipboardCheck, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroBookkeeping from "../assets/hero-bookkeeping.jpg";

const bookkeepingServices = [
  { icon: BookOpen, title: "Daily Transaction Recording", desc: "Accurate recording of all financial transactions to maintain clean and organized books." },
  { icon: FileText, title: "Financial Statement Prep", desc: "Preparation of balance sheets, income statements, and cash flow statements." },
  { icon: Calculator, title: "Bank Reconciliation", desc: "Regular bank reconciliation to ensure your records match bank statements accurately." },
  { icon: TrendingUp, title: "Accounts Management", desc: "Management of accounts receivable and payable to maintain healthy cash flow." },
  { icon: ClipboardCheck, title: "Tax-Ready Records", desc: "Maintaining tax-compliant records that simplify filing and reduce audit risks." },
  { icon: BarChart3, title: "Financial Reporting", desc: "Regular financial reports providing insights into your business performance." },
];

const Bookkeeping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Best Bookkeeping Services in Kenya"
        subtitle="Keep all your records and bookkeeping up to date. We offer the best bookkeeping services in Kenya for SMEs, organizations, and large corporations."
        backgroundImage={heroBookkeeping}
      />

      <StatsSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Best Bookkeeping Services In Kenya" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gichuri & Partners offers reliable bookkeeping services to keep your financial records organized, tax-ready, and fully compliant. We understand that maintaining accurate financial records is essential for the success of your business.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our bookkeeping services are designed to help businesses maintain clean, organized, and tax-compliant financial records. We handle everything from daily transaction recording to financial statement preparation, ensuring your books are always up-to-date.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a small business or a large corporation, our experienced team provides tailored bookkeeping solutions that simplify your financial management, reduce audit risks, and support informed decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Bookkeeping Services" subtitle="Comprehensive bookkeeping solutions to keep your finances in order." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookkeepingServices.map((service, index) => (
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

export default Bookkeeping;
