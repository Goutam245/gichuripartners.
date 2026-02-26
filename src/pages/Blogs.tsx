import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import heroBlogs from "../assets/hero-blogs.jpg";

import blogKraTribunal from "../assets/blog-kra-tribunal.jpg";
import blogFilingCase from "../assets/blog-filing-case.jpg";
import blogTimeline from "../assets/blog-timeline.jpg";
import blogDispute from "../assets/blog-dispute.jpg";
import blogSavings from "../assets/blog-savings.jpg";
import blogTaxCompliance from "../assets/blog-tax-compliance.jpg";
import blogEtims from "../assets/blog-etims.jpg";
import blogVat from "../assets/blog-vat.jpg";
import blogRecords from "../assets/blog-records.jpg";
import blogPaye from "../assets/blog-paye.jpg";
import blogAudit from "../assets/blog-audit.jpg";
import blogRegister from "../assets/blog-register.jpg";

const allArticles = [
  {
    title: "Common Reasons Why Businesses Lose at the KRA Tax Appeal Tribunal",
    date: "February 21, 2026",
    excerpt: "Understanding the common pitfalls businesses face at the KRA Tax Appeal Tribunal and how to avoid them. Many businesses fail due to inadequate documentation, missed deadlines, and lack of professional representation.",
    category: "Tax Advisory",
    image: blogKraTribunal,
  },
  {
    title: "How to File a Case at the KRA Tax Appeal Tribunal",
    date: "February 19, 2026",
    excerpt: "A comprehensive guide to filing your case at the Tax Appeal Tribunal, from documentation to representation. Learn the step-by-step process to ensure your appeal is properly filed.",
    category: "Tax Advisory",
    image: blogFilingCase,
  },
  {
    title: "Timeline and Costs of KRA Tax Appeals in Kenya",
    date: "February 12, 2026",
    excerpt: "Learn about the expected timelines and costs involved in pursuing tax appeals through the KRA system. Understand what to budget for and how long the process typically takes.",
    category: "Tax Advisory",
    image: blogTimeline,
  },
  {
    title: "KRA Tax Appeal Tribunal vs ADR",
    date: "February 11, 2026",
    excerpt: "Comparing the Tax Appeal Tribunal and Alternative Dispute Resolution methods for tax disputes in Kenya. Each approach has its advantages depending on your specific situation.",
    category: "Tax Advisory",
    image: blogDispute,
  },
  {
    title: "How Tax Advisory Services Can Save Your Business Money",
    date: "February 1, 2026",
    excerpt: "Discover how professional tax advisory services can help your business reduce liabilities and increase savings through strategic planning and compliance optimization.",
    category: "Tax Advisory",
    image: blogSavings,
  },
  {
    title: "The Role of Tax Advisory in Preventing KRA Disputes",
    date: "February 1, 2026",
    excerpt: "Understanding how proactive tax advisory can help your business avoid costly KRA disputes and penalties by ensuring full compliance from the start.",
    category: "Tax Advisory",
    image: blogTaxCompliance,
  },
  {
    title: "Onboarding E-TIMS for Small Businesses in Kenya",
    date: "March 10, 2025",
    excerpt: "A step-by-step guide to help small businesses onboard the Electronic Tax Invoice Management System. E-TIMS compliance is now mandatory for all VAT-registered businesses.",
    category: "Business Services",
    image: blogEtims,
  },
  {
    title: "Understanding VAT Registration Requirements in Kenya",
    date: "January 15, 2026",
    excerpt: "Everything you need to know about VAT registration thresholds, processes, and compliance in Kenya. Stay informed on the latest requirements from KRA.",
    category: "Tax Advisory",
    image: blogVat,
  },
  {
    title: "Best Practices for Maintaining Clean Financial Records",
    date: "December 20, 2025",
    excerpt: "Clean financial records are the backbone of any successful business. Learn the best practices for maintaining accurate and organized books throughout the year.",
    category: "Bookkeeping Services",
    image: blogRecords,
  },
  {
    title: "PAYE Compliance Guide for Kenyan Employers",
    date: "November 5, 2025",
    excerpt: "A comprehensive guide to PAYE compliance for employers in Kenya. Understand your obligations, deadlines, and how to avoid penalties.",
    category: "Accounting Services",
    image: blogPaye,
  },
  {
    title: "Why Every Business Needs an Annual Audit",
    date: "October 18, 2025",
    excerpt: "Annual audits are not just a regulatory requirement — they provide valuable insights into your business operations and financial health.",
    category: "Auditing Services",
    image: blogAudit,
  },
  {
    title: "How to Register a Business in Kenya: Complete Guide",
    date: "September 22, 2025",
    excerpt: "Everything you need to know about registering a business in Kenya, from choosing a business structure to obtaining necessary licenses and permits.",
    category: "Business Services",
    image: blogRegister,
  },
];

const categories = [
  { name: "All", count: allArticles.length },
  { name: "Tax Advisory", count: allArticles.filter(a => a.category === "Tax Advisory").length },
  { name: "Accounting Services", count: allArticles.filter(a => a.category === "Accounting Services").length },
  { name: "Auditing Services", count: allArticles.filter(a => a.category === "Auditing Services").length },
  { name: "Bookkeeping Services", count: allArticles.filter(a => a.category === "Bookkeeping Services").length },
  { name: "Business Services", count: allArticles.filter(a => a.category === "Business Services").length },
];

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        title="Blog Insights"
        subtitle="Find out what is new in the world of taxes. Expert insights, guides, and updates to keep your business ahead."
        backgroundImage={heroBlogs}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-premium transition-all duration-300 hover:border-gold/30"
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
                        <span className="bg-gold/10 px-2.5 py-1 rounded">{article.category}</span>
                      </div>
                      <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <span className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                          Read More <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">Search</h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type to start searching..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pr-12 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
                    />
                    <Search className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-sm transition-all ${
                          selectedCategory === cat.name
                            ? "bg-gold/10 text-gold font-semibold border border-gold/30"
                            : "text-muted-foreground hover:text-gold hover:bg-muted"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3" />
                          {cat.name}
                        </span>
                        <span className="text-xs">({cat.count})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-navy rounded-lg p-6">
                  <h4 className="font-bold text-primary-foreground mb-3">Need Help?</h4>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    Get expert tax advice from our consultants.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block w-full text-center bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-5 py-3 rounded-md transition-all text-sm"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blogs;
