import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";

const advisoryLinks = [
  { name: "Tax Advisory", path: "/tax-advisory" },
  { name: "KRA Tax Agent", path: "/tax-advisory" },
  { name: "Payroll Services", path: "/about" },
  { name: "Auditing Services", path: "/auditing" },
  { name: "Accounting Services", path: "/accounting" },
  { name: "Business Registration", path: "/about" },
  { name: "Bookkeeping Services", path: "/bookkeeping" },
];

const kraLinks = [
  { name: "KRA Audit", path: "/tax-advisory" },
  { name: "Tax Appeal", path: "/tax-advisory" },
  { name: "Tax Compliance", path: "/tax-advisory" },
  { name: "KRA Assessments", path: "/tax-advisory" },
  { name: "KRA Waiver Letter", path: "/tax-advisory" },
  { name: "E-tims Registration", path: "/tax-advisory" },
  { name: "KRA Pin Registration", path: "/tax-advisory" },
];

const returnFilingLinks = [
  { name: "iTax Return", path: "/tax-advisory" },
  { name: "Income Tax Returns", path: "/tax-advisory" },
  { name: "Turnover Tax Returns", path: "/tax-advisory" },
  { name: "Monthly Rental Income", path: "/tax-advisory" },
  { name: "Capital Gains Tax Return", path: "/tax-advisory" },
  { name: "Value Added Tax Returns", path: "/tax-advisory" },
  { name: "Digital Service Tax Returns", path: "/tax-advisory" },
];

const firmLinks = [
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about" },
  { name: "Tax News", path: "/news" },
  { name: "Privacy Policy", path: "/about" },
  { name: "Appointment", path: "/contact" },
  { name: "PAYE Calculator", path: "/tax-advisory" },
];

const FooterLinkColumn = ({ title, links }: { title: string; links: { name: string; path: string }[] }) => (
  <div>
    <h4 className="text-gold font-semibold mb-5 text-base">{title}</h4>
    <ul className="space-y-2.5 text-sm">
      {links.map((item) => (
        <li key={item.name}>
          <Link to={item.path} className="text-primary-foreground/70 hover:text-gold transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              We are specialists in tax matters. We take care of your tax and accounting matters so that you can focus on your business growth.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:+254711827149" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +254 711 827 149
              </a>
              <a href="tel:+254702131313" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                +254 702 13 13 13
              </a>
              <a href="mailto:info@gichuripartners.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                info@gichuripartners.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>College House, 3rd Floor, University Way, Nairobi Kenya.</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-6 py-3 rounded-md transition-all text-sm hover:shadow-gold"
              >
                Book A Free Consultation
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkColumn title="Advisory" links={advisoryLinks} />
          <FooterLinkColumn title="KRA Services" links={kraLinks} />
          <FooterLinkColumn title="Return Filing" links={returnFilingLinks} />
          <FooterLinkColumn title="Our Firm" links={firmLinks} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            Copyright © 2026 Gichuri & Partners. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/about" className="text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
