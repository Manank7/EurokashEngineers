import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-primary/20 py-3 shadow-[0_4px_30px_-10px_rgba(0,255,255,0.1)]"
          : "bg-background/50 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
          <div className="relative flex items-center justify-center w-11 h-11">
            <img
              src="/images/logo.png"
              alt="Eurokash Engineers & Consultants Logo"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-[15deg]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-tight tracking-widest text-foreground">
              EUROKASH
            </span>
            <span className="text-[0.6rem] font-mono tracking-[0.2em] text-primary/80 uppercase">
              Engineers & Consultants
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors ${
                  isActive ? "text-primary font-bold" : "text-foreground/70 hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 border border-primary text-primary font-mono text-xs tracking-wider uppercase hover:bg-primary hover:text-background transition-colors duration-300 shadow-[0_0_15px_-3px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(0,255,255,0.5)]"
            data-testid="button-nav-inquire"
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-primary/20 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 font-mono text-sm tracking-wider uppercase border-l-2 ${
                    location === link.href
                      ? "border-primary text-primary bg-primary/5"
                      : "border-transparent text-foreground/70 hover:text-foreground hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}