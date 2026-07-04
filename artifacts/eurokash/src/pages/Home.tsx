import React from "react";
import { Link } from "wouter";
import { ArrowRight, Activity, ShieldCheck, Globe, Zap, Settings, Hexagon } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Industrial Power Plant" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-8 bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
              <span className="font-mono text-sm md:text-base tracking-[0.3em] text-primary uppercase font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                Established 1989
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8 text-foreground uppercase"
            >
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/50 drop-shadow-lg">
                India's Industry
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-2xl text-foreground/80 max-w-2xl mb-6 font-light leading-relaxed text-justify"
            >
              Innovating Industrial Solutions, Empowering Global Projects.
              The trusted engineering command center for steel, power, and nuclear sectors.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/services" 
                className="group flex items-center gap-3 bg-primary text-background px-8 py-4 font-mono font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,255,255,0.5)]"
                data-testid="link-hero-services"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="group flex items-center gap-3 bg-transparent border border-primary/50 text-foreground px-8 py-4 font-mono font-bold tracking-widest uppercase hover:border-primary hover:bg-primary/10 transition-all duration-300"
                data-testid="link-hero-about"
              >
                Our Legacy
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 right-10 hidden lg:flex gap-8 bg-card/80 backdrop-blur-md border border-primary/20 p-6"
        >
          <div>
            <div className="font-display text-4xl font-bold text-primary">35+</div>
            <div className="font-mono text-xs tracking-widest text-foreground/60 uppercase mt-1">Years Exp.</div>
          </div>
          <div className="w-[1px] bg-primary/20" />
          <div>
            <div className="font-display text-4xl font-bold text-primary">10+</div>
            <div className="font-mono text-xs tracking-widest text-foreground/60 uppercase mt-1">Sectors</div>
          </div>
          <div className="w-[1px] bg-primary/20" />
          <div>
            <div className="font-display text-4xl font-bold text-primary">10+</div>
            <div className="font-mono text-xs tracking-widest text-foreground/60 uppercase mt-1">Countries</div>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 border border-primary/20 transform -rotate-2 pointer-events-none" />
                <img 
                  src="/images/products.png" 
                  alt="Industrial Equipment" 
                  className="w-full h-auto relative z-10 border border-primary/30 shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-background/90 backdrop-blur-sm border border-primary/30 p-3 font-mono text-[10px] text-primary">
                  <div className="flex items-center gap-2"><Activity className="w-3 h-3"/> SYS.STATUS: NOMINAL</div>
                  <div className="flex items-center gap-2 mt-1"><Settings className="w-3 h-3"/> ISO 9001:2015 CERTIFIED</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-6">
                Engineered for <span className="text-primary">Scale</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed text-justify">
                Eurokash Engineers & Consultants is a premier trading house and industrial equipment distributor. 
                We specialize in sourcing and supplying high-quality machinery for the Steel, Power, Petrochemical, 
                Refinery, Mining, Nuclear, Defence and Heavy Engineering sectors.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  { icon: ShieldCheck, text: "Trusted by SAIL, NTPC, BHEL & NPCIL" },
                  { icon: Globe, text: "Global supplier network across 10+ countries" },
                  { icon: Zap, text: "ISO 9001:2015 & ISO 14001:2015 Certified" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-foreground/80">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm tracking-wide">{item.text}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary font-mono tracking-widest text-sm uppercase hover:text-white transition-colors"
              >
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS MATRIX */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4">Core Offerings</h2>
              <p className="text-foreground/60">Comprehensive industrial solutions from procurement to execution.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                title: "Industrial Equipment Supply",
                desc: "Sourcing and distribution of high-quality machinery, spare parts and capital equipment from global manufacturers.",
                link: "/products"
              },
              {
                title: "Sourcing & Modernization",
                desc: "Reconstruction and modernization of legacy Russian and CIS-origin equipment for Indian heavy industries.",
                link: "/services"
              },
              {
                title: "Project Consultancy",
                desc: "Techno-economic feasibility reports, end-to-end project management and government liaison services.",
                link: "/services"
              },
              {
                title: "Global Tender Management",
                desc: "Expert management of international tenders ensuring compliance with private and government procurement norms.",
                link: "/services"
              }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <Link href={card.link} className="block group h-full">
                  <div className="bg-card border border-primary/10 p-8 h-full flex flex-col transition-all duration-300 hover:bg-card/80 hover:border-primary/50 relative overflow-hidden">
                    <Hexagon className="w-12 h-12 text-primary/40 mb-6 group-hover:text-primary transition-colors shrink-0" strokeWidth={1} />
                    <h3 className="font-display text-xl font-bold uppercase mb-3 text-foreground group-hover:text-primary transition-colors min-h-[3.5rem]">{card.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-sans text-justify flex-1">{card.desc}</p>
                    <div className="mt-auto flex items-center text-primary font-mono text-xs tracking-widest uppercase">
                      Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative border-t border-primary/20 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <Hexagon className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">Initiate Project</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-6 text-justify mx-auto">
              Engage our technical consultancy team to discuss feasibility, sourcing, or modernization of your industrial facility.
            </p>
            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 bg-primary text-background px-10 py-5 font-mono font-bold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_30px_-5px_rgba(0,255,255,0.4)]"
                data-testid="link-home-cta"
              >
                Contact Command Center
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}