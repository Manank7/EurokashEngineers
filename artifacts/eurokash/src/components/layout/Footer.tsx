import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Hexagon, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Hexagon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight tracking-widest text-foreground">
                  EUROKASH
                </span>
              </div>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-sans">
              Innovating Industrial Solutions, Empowering Global Projects. A premier trading house and industrial equipment distributor since 1989.
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs text-foreground/50">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                EST. 1989
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                NEW DELHI, INDIA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm tracking-widest text-foreground mb-6 uppercase border-b border-primary/20 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/clients", label: "Clientele" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-mono text-sm tracking-widest text-foreground mb-6 uppercase border-b border-primary/20 pb-2 inline-block">
              Regional Presence
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "Bhilai", "Bokaro", "Rourkela", "Visakhapatnam", "Bhopal", "Kudan Kulam", "Kolkata", "Jamshedpur", "Chennai"
              ].map((office) => (
                <li key={office} className="text-sm text-foreground/60 flex items-center gap-2">
                  <span className="text-primary/50 text-xs">/</span> {office}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-sm tracking-widest text-foreground mb-6 uppercase border-b border-primary/20 pb-2 inline-block">
              Head Office
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <a href="tel:+919811339188" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +91 98113 39188
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                <span>info@eurokash.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-primary/10 text-primary border border-primary/30 font-mono text-xs tracking-wider uppercase hover:bg-primary hover:text-background transition-all"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/40 font-mono">
            © {new Date().getFullYear()} EUROKASH ENGINEERS & CONSULTANTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 text-xs text-foreground/40 font-mono">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-primary transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
