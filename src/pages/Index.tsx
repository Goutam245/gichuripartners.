import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FileText, BookOpen, Calculator, Users, BarChart3, ArrowRight, Award, Landmark, Scale, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import GovernmentAgencies from "../components/GovernmentAgencies";
import AwardsBadges from "../components/AwardsBadges";

import heroHome from "../assets/hero-home.jpg";
import heroAbout from "../assets/hero-about.jpg";
import serviceTax from "../assets/service-tax.jpg";
import serviceAccounting from "../assets/service-accounting.jpg";
import serviceAuditing from "../assets/service-auditing.jpg";
import serviceBookkeeping from "../assets/service-bookkeeping.jpg";
import servicePayroll from "../assets/service-payroll.jpg";
import serviceBusiness from "../assets/service-business.jpg";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const services = [
  {
    icon: Shield,
    title: "Tax Advisory",
    description: "We provide comprehensive tax advisory services to guarantee your company's tax compliance and maximise returns.",
    link: "/tax-advisory",
    image: serviceTax,
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Our accounting services include financial reporting, bookkeeping, tax preparation, and financial management.",
    link: "/accounting",
    image: serviceAccounting,
  },
  {
    icon: FileText,
    title: "Auditing",
    description: "We provide a thorough and independent review of your business's financial records to ensure compliance.",
    link: "/auditing",
    image: serviceAuditing,
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "We provide the best bookkeeping services in Kenya for SMEs, organizations, and large corporations.",
    link: "/bookkeeping",
    image: serviceBookkeeping,
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "We manage how you pay salaries and wages to your employees, ensuring tax compliance and employee satisfaction.",
    link: "/about",
    image: servicePayroll,
  },
  {
    icon: BarChart3,
    title: "Business Services",
    description: "We provide a wide range of business services to get your startup off the ground or expand an existing enterprise.",
    link: "/about",
    image: serviceBusiness,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Extensive Experience",
    description: "With over 10 years of expertise in tax consulting, business consulting, and bookkeeping consulting.",
  },
  {
    icon: Scale,
    title: "All-in-One Tax Solutions",
    description: "Our services cover all aspects of Kenyan direct and indirect taxes, exchange control regulations, and employee-related issues.",
  },
  {
    icon: Users,
    title: "Client-Focused Strategies",
    description: "Our culture is built around ensuring the success of our clients. We see the potential within businesses and help you achieve goals.",
  },
  {
    icon: Shield,
    title: "Integrity & Compliance",
    description: "We perform our services in accordance with the Global Tax Code of Conduct, maintaining the highest levels of professionalism.",
  },
  {
    icon: Landmark,
    title: "KRA Representation",
    description: "We represent you before the Kenya Revenue Authority in all tax matters including audits, assessments, objections and appeals.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "We empower your decision-making process with insightful financial advisory and data-driven tax strategies.",
  },
];

const blogPreviews = [
  {
    title: "Common Reasons Why Businesses Lose at the KRA Tax Appeal Tribunal",
    date: "February 21, 2026",
    excerpt: "Understanding the common pitfalls businesses face at the KRA Tax Appeal Tribunal and how to avoid them.",
    category: "Tax Advisory",
    image: blog1,
  },
  {
    title: "How to File a Case at the KRA Tax Appeal Tribunal",
    date: "February 19, 2026",
    excerpt: "A comprehensive guide to filing your case at the Tax Appeal Tribunal, from documentation to representation.",
    category: "Tax Advisory",
    image: blog2,
  },
  {
    title: "How Tax Advisory Services Can Save Your Business Money",
    date: "February 1, 2026",
    excerpt: "Discover how professional tax advisory services can help your business reduce liabilities and increase savings.",
    category: "Tax Advisory",
    image: blog3,
  },
];

const faqs = [
  {
    q: "Can I file all returns on iTax?",
    a: "Yes you can. First, you need to login into the system then go to the returns tab and select file return and download the return. You need to fill the return offline before you generate a zipped file that you will upload.",
  },
  {
    q: "What is a waiver application?",
    a: "Where taxpayers fail to pay their taxes or file returns by stipulated due dates, penalties and interest are charged by the law. You may apply to the Commissioner to remit such penalties and interest.",
  },
  {
    q: "How do I apply for TCC in iTax?",
    a: "The taxpayer will apply for TCC through their iTax profile. The application will be received by a KRA officer and processed electronically. Successful applicants will receive an email with the TCC attached.",
  },
  {
    q: "How do tax assessments arise?",
    a: "KRA Assessments arise when some individuals or business entities abuse the trust bestowed on them by the law to under declare or not to declare their income hence evading payment of taxes.",
  },
  {
    q: "Are employee benefits taxable?",
    a: "Yes. Where an employee enjoys a benefit, advantage, or facility of whatsoever nature in connection with employment, the value of such benefit should be included in the employee's earnings and charged to tax.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSection
        title="Best Tax Consultants in Nairobi, Kenya"
        subtitle="We Handle Taxes, You Handle Business. Expert tax advisory, accounting, auditing, and bookkeeping services to empower your business growth."
        backgroundImage={heroHome}
        ctaText="Book Free Consultation"
        ctaLink="/contact"
        secondaryCta={{ text: "Our Services", link: "/tax-advisory" }}
      />

      {/* Stats */}
      <StatsSection />

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We Do"
            subtitle="Let us take care of your tax, accounting, audit and business registration needs with our comprehensive tax compliant services!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-12 h-1 bg-gold rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gichuri & Partners is one of the best tax consultants in Kenya that provides a diverse range of tax and business advisory services to unlock your business's full potential. We are more than a tax consultancy, walking with you in every step of building your business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of qualified experts and dedicated professionals is well-equipped to navigate the complex business and financial landscape in Kenya. Our mission is to help businesses thrive and scale efficiently through expert tax strategies, auditing services, and streamlined financial operations.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-3.5 rounded-md transition-all duration-300 text-sm hover:shadow-gold hover:translate-y-[-2px]"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-premium">
                <img
                  src={heroAbout}
                  alt="Gichuri & Partners professional team"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-premium max-w-[200px]">
                <div className="text-3xl font-bold text-gold mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence in Tax Consulting</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Gichuri & Partners"
            subtitle="Our record speaks for itself. We are the best tax and business consultants in Kenya."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-muted rounded-xl hover:shadow-premium transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Government Agencies */}
      <GovernmentAgencies />

      {/* Blog Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Insights"
            subtitle="Stay updated with the latest trends in tax, audit & accounting."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreviews.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-premium transition-all duration-500 hover:border-gold/30 hover:translate-y-[-4px]"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gold font-medium mb-3">
                    <span className="bg-gold/10 px-2.5 py-1 rounded-full">{article.category}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-secondary-foreground font-semibold px-8 py-3.5 rounded-md transition-all duration-300 text-sm"
            >
              View All Blog Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-foreground text-sm md:text-base list-none">
                  {faq.q}
                  <span className="text-gold ml-4 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      <AwardsBadges />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
