import { motion } from "framer-motion";
import { Shield, FileCheck, Scale, Search, AlertTriangle, ClipboardList, Calculator, Landmark, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroTax from "../assets/hero-tax.jpg";

const valueAddedServices = [
  { icon: FileCheck, title: "Pin Registration Services", desc: "Seamless KRA PIN, VAT, PAYE, TOT, and Excise Duty registration services." },
  { icon: ClipboardList, title: "Compliance Support", desc: "Full support for meeting all regulatory and tax compliance requirements." },
  { icon: Search, title: "Tax Health Checks", desc: "Comprehensive tax health checks to identify risks and ensure compliance." },
  { icon: Calculator, title: "Turnover Tax Guidance", desc: "Expert guidance on turnover tax obligations and filing requirements." },
  { icon: Shield, title: "VAT Advisory Services", desc: "Complete VAT registration, compliance, and advisory services." },
  { icon: Landmark, title: "KRA Audit Support", desc: "Professional representation and support during KRA audit processes." },
  { icon: Scale, title: "Tax Dispute Resolution", desc: "Expert handling of KRA objections, appeals, and tribunal cases." },
  { icon: FileText, title: "Tax Return Filing", desc: "Accurate and timely filing of all tax returns including VAT, PAYE, and Corporate Tax." },
  { icon: AlertTriangle, title: "PAYE Compliance", desc: "Ensure full PAYE compliance with accurate calculations and timely remittances." },
];

const TaxAdvisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Tax Advisory Services"
        subtitle="Maximize tax savings with expert guidance. We help businesses stay compliant and reduce tax liabilities through strategic tax planning."
        backgroundImage={heroTax}
      />

      <StatsSection />

      {/* Intro Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Tax Advisory Services in Kenya" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gichuri & Partners offers expert tax advisory services, including tax planning, compliance, and dispute resolution. We help businesses develop efficient tax strategies while ensuring full adherence to Kenyan tax laws, optimizing financial performance and compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our comprehensive tax advisory covers Corporate Tax, VAT, PAYE, Withholding Tax, Turnover Tax, and all other tax obligations under Kenyan law. We provide tailored tax-saving strategies, legal compliance advice, and business structuring solutions to minimize tax liabilities and maximize profits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you need help with KRA assessments, tax dispute resolution, or proactive tax planning, our experienced team provides the expert guidance and representation you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Value Added Services"
            subtitle="Let us help your business with our 10+ years of expertise in the field of Tax Advisory."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueAddedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-premium transition-all hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
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

export default TaxAdvisory;
