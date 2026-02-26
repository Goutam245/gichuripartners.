import { motion } from "framer-motion";
import { Target, Eye, CheckCircle, Users, Award, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroAbout from "../assets/hero-about.jpg";

const values = [
  { icon: Award, title: "Efficiency", desc: "We provide efficient and unparalleled tax and business services. If you're looking for a reliable tax and auditing firm in Kenya, look no further." },
  { icon: Shield, title: "Integrity", desc: "We are committed to providing premier tax, auditing, accounting, and business services, upholding the highest level of integrity and transparency." },
  { icon: Users, title: "Trustworthy", desc: "With at least a decade in the tax consultancy and business advisory industry, Gichuri & Partners is your trustworthy ally in all things taxes." },
];

const reasons = [
  "Extensive Experience — Over 10 years of expertise in tax consulting and bookkeeping.",
  "Data-Driven Decision Making — We empower your decision-making process with insightful financial advisory.",
  "All-in-One Tax Solutions — We cover all aspects of Kenyan direct and indirect taxes.",
  "Experienced Tax Professionals — Our team is dedicated to providing top-notch services.",
  "Client-Focused Tax Strategies — We see the potential within businesses and help you achieve goals.",
  "Business Growth Partners — Beyond tax consulting, we offer bookkeeping and business advisory services.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="What We Do"
        subtitle="We help businesses build long-term success with our Tax Advisory, Accounting, Auditing, Bookkeeping, Payroll and Business Registration services."
        backgroundImage={heroAbout}
      />

      <StatsSection />

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Enhancing Tax Compliance" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Gichuri & Partners, we unlock your business's true potential with expert tax and accounting insights, advice, and support. Our client-focused approach ensures success by recognizing the opportunities within your business and the people driving it forward.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 10 years of experience, we are committed to a client-focused approach that drives success and long-term growth. Our expertise spans Kenyan direct and indirect taxes, exchange control regulations, and employee-related matters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Additionally, our business consulting services empower decision-making through tailored financial advisory, while our meticulous bookkeeping consulting keeps financial records accurate and up-to-date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Kenya's most trusted and innovative tax and accounting advisory firm, empowering businesses with expert guidance to achieve full tax compliance and financial success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower businesses with expert tax, accounting, and financial solutions, ensuring compliance, efficiency, and long-term growth through strategic guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Reasons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Top Reasons For Using Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 p-5 bg-muted rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Us" subtitle="Our record speaks for itself." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, index) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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

export default About;
