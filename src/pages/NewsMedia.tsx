import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import heroNews from "../assets/hero-news.jpg";

import blogKraTribunal from "../assets/blog-kra-tribunal.jpg";
import blogFilingCase from "../assets/blog-filing-case.jpg";
import blogTimeline from "../assets/blog-timeline.jpg";
import blogDispute from "../assets/blog-dispute.jpg";
import blogSavings from "../assets/blog-savings.jpg";
import blogTaxCompliance from "../assets/blog-tax-compliance.jpg";
import blogEtims from "../assets/blog-etims.jpg";
import blogVat from "../assets/blog-vat.jpg";

const articles = [
  {
    title: "Common Reasons Why Businesses Lose at the KRA Tax Appeal Tribunal",
    date: "February 21, 2026",
    excerpt: "Understanding the common pitfalls businesses face at the KRA Tax Appeal Tribunal and how to avoid them.",
    category: "Tax Advisory",
    image: blogKraTribunal,
  },
  {
    title: "How to File a Case at the KRA Tax Appeal Tribunal",
    date: "February 19, 2026",
    excerpt: "A comprehensive guide to filing your case at the Tax Appeal Tribunal, from documentation to representation.",
    category: "Tax Advisory",
    image: blogFilingCase,
  },
  {
    title: "Timeline and Costs of KRA Tax Appeals in Kenya",
    date: "February 12, 2026",
    excerpt: "Learn about the expected timelines and costs involved in pursuing tax appeals through the KRA system.",
    category: "Tax Advisory",
    image: blogTimeline,
  },
  {
    title: "KRA Tax Appeal Tribunal vs ADR",
    date: "February 11, 2026",
    excerpt: "Comparing the Tax Appeal Tribunal and Alternative Dispute Resolution methods for tax disputes in Kenya.",
    category: "Tax Advisory",
    image: blogDispute,
  },
  {
    title: "How Tax Advisory Services Can Save Your Business Money",
    date: "February 1, 2026",
    excerpt: "Discover how professional tax advisory services can help your business reduce liabilities and increase savings.",
    category: "Tax Advisory",
    image: blogSavings,
  },
  {
    title: "The Role of Tax Advisory in Preventing KRA Disputes",
    date: "February 1, 2026",
    excerpt: "Understanding how proactive tax advisory can help your business avoid costly KRA disputes and penalties.",
    category: "Tax Advisory",
    image: blogTaxCompliance,
  },
  {
    title: "Onboarding E-TIMS for Small Businesses in Kenya",
    date: "March 10, 2025",
    excerpt: "A step-by-step guide to help small businesses onboard the Electronic Tax Invoice Management System.",
    category: "Business",
    image: blogEtims,
  },
  {
    title: "Understanding VAT Registration Requirements in Kenya",
    date: "January 15, 2026",
    excerpt: "Everything you need to know about VAT registration thresholds, processes, and compliance in Kenya.",
    category: "Tax Advisory",
    image: blogVat,
  },
];

const NewsMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="News & Media"
        subtitle="Stay ahead of the curve. The latest trends in business taxation you need to know!"
        backgroundImage={heroNews}
        ctaText="Book A Free Consultation"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Latest Articles & Insights"
            subtitle="Stay updated with the latest trends in tax, audit & accounting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-premium transition-all hover:border-gold/30"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gold font-medium mb-3">
                    <span className="bg-gold/10 px-2 py-1 rounded">{article.category}</span>
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
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NewsMedia;
