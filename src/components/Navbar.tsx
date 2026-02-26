import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "#",
    children: [
      { name: "Tax Advisory", path: "/tax-advisory" },
      { name: "Accounting", path: "/accounting" },
      { name: "Auditing", path: "/auditing" },
      { name: "Bookkeeping", path: "/bookkeeping" },
    ],
  },
  { name: "News & Media", path: "/news" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = ["/tax-advisory", "/accounting", "/auditing", "/bookkeeping"].includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1.5" : "bg-white/95 py-2.5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav — Centered */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isServiceActive ? "text-gold" : "text-foreground hover:text-gold"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-52"
                    >
                      <div className="bg-white border border-border rounded-lg shadow-premium overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3 text-sm font-medium transition-colors ${
                              isActive(child.path)
                                ? "text-gold bg-muted"
                                : "text-foreground hover:text-gold hover:bg-muted"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-3/4 ${
                  isActive(link.path) ? "text-gold after:w-3/4" : "text-foreground hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-6 py-2 rounded-md transition-all duration-500 text-sm hover:shadow-gold hover:translate-y-[-1px]"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium text-foreground"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                              isActive(child.path) ? "text-gold bg-muted" : "text-muted-foreground hover:text-gold"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.path) ? "text-gold bg-muted" : "text-foreground hover:text-gold hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-2 bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold px-5 py-3 rounded-md text-center text-sm transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
