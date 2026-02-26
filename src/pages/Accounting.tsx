import { motion } from "framer-motion";
import { FileText, PieChart, TrendingUp, ClipboardCheck, Calculator, BarChart3 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroAccounting from "../assets/hero-accounting.jpg";

const accountingServices = [
  { icon: FileText, title: "Financial Reporting", desc: "Accurate and timely financial reports that meet IFRS and local compliance standards." },
  { icon: PieChart, title: "Tax Preparation", desc: "Expert tax preparation services ensuring maximum compliance and optimal tax positions." },
  { icon: TrendingUp, title: "Financial Management", desc: "Strategic financial management to help your business grow and maintain profitability." },
  { icon: ClipboardCheck, title: "Compliance & Statutory", desc: "Ensuring your business meets all statutory requirements and regulatory obligations." },
  { icon: Calculator, title: "Cost Accounting", desc: "Detailed cost analysis and tracking to optimize your business expenditures." },
  { icon: BarChart3, title: "Financial Advisory", desc: "Expert financial advice to guide your business decisions and long-term planning." },
];

const Accounting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Best Accounting Services in Kenya"
        subtitle="Are you looking for the best accounting services in Kenya? We provide comprehensive financial reporting, bookkeeping, tax preparation, and financial management."
        backgroundImage={heroAccounting}
      />

      <StatsSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Best Accounting Services In Kenya" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gichuri & Partners provides comprehensive accounting services tailored to businesses of all sizes. Our services include financial reporting, bookkeeping, tax preparation, and financial management designed to keep your business compliant and profitable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Looking to maintain proper financial records and stay compliant? Our business accounting services include financial reporting that meets IFRS standards, cost-effective financial management, statutory compliance including PAYE, VAT, Corporate Tax, and Withholding Tax filings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced accountants ensures that your financial records are accurate, up-to-date, and compliant with all regulatory requirements. We help you make informed financial decisions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Accounting Services" subtitle="Comprehensive accounting solutions for your business needs." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingServices.map((service, index) => (
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

export default Accounting;
