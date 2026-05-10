import React from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Cog, Droplets, Zap, Wind } from "lucide-react";

export default function Products() {
  const mechanicalCategories = [
    {
      title: "Machine Tools (CNC)",
      icon: Cog,
      desc: "Lathes, vertical and horizontal drilling, boring, milling, turning, cutting and grinding machines, centers and other equipment."
    },
    {
      title: "Turbines & Turbogenerators",
      icon: Zap,
      desc: "High quality turbines and turbogenerators for reliable, massive-scale power generation."
    },
    {
      title: "Pumps",
      icon: Droplets,
      desc: "Dynamic & volumetric pumps and pump units for different types of liquids used in heavy industries, including specialized slurry pumps."
    },
    {
      title: "Compressors & Exhausters",
      icon: Wind,
      desc: "Centrifugal, reciprocal and screw air and gas compressors, exhausters, superchargers, turbochargers, fans and blowers."
    }
  ];

  const generalEquipment = [
    "Centrifugal Pumps (including slurry pumps)",
    "Electric Motors (HT/LT, DC/AC)",
    "High-Pressure Valves",
    "Steam Boilers, Turbines & Equipments",
    "Compressors, Exhauster & Blowers",
    "Circuit Breakers, Relays, Thyristors, Contactors",
    "Rolling Mill Equipment",
    "Machine Tools & Presses (Forging, Hydraulic)"
  ];

  return (
    <PageTransition>
      <PageHeader title="Products & Sourcing" subtitle="Precision Engineering Supply" />

      <div className="container mx-auto px-4">
        
        {/* Banner Image */}
        <FadeIn className="mb-20">
          <div className="w-full h-64 md:h-96 relative border border-primary/20 overflow-hidden">
            <img 
              src="/images/products.png" 
              alt="Industrial Pumps" 
              className="w-full h-full object-cover grayscale-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-display font-bold uppercase shadow-background drop-shadow-md">Heavy Machinery Supply</h2>
            </div>
          </div>
        </FadeIn>

        {/* Mechanical Categories */}
        <div className="mb-24">
          <FadeIn>
            <h3 className="text-2xl font-display font-bold uppercase mb-8 border-b border-primary/20 pb-2 inline-block">
              Mechanical Equipment Categories
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mechanicalCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 p-6 border border-primary/10 bg-card hover:border-primary/40 transition-colors h-full">
                  <div className="shrink-0 text-primary">
                    <cat.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold uppercase mb-2">{cat.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Full Equipment List & Sourcing */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <FadeIn>
            <h3 className="text-2xl font-display font-bold uppercase mb-6">Complete Industrial Catalog</h3>
            <div className="bg-card border border-primary/20 p-6">
              <ul className="space-y-3">
                {generalEquipment.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-mono text-sm border-b border-foreground/5 pb-3 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-display font-bold uppercase mb-6">Specialized Sourcing</h3>
            <div className="prose prose-invert max-w-none text-foreground/80">
              <p>
                A core competency of Eurokash is the location, acquisition, and delivery of highly specialized equipment from our international network.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 my-6">
                <h4 className="font-display uppercase text-primary text-lg font-bold mb-2">CIS & Eastern European Network</h4>
                <p className="text-sm font-sans m-0">
                  We specialize in the sourcing of mechanical, electrical, hydraulic, and processing equipment specifically from manufacturers in Russia and Ukraine. We are experts in reconstructing and modernizing legacy Russian and CIS-origin equipment.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="inline-block bg-primary text-background px-6 py-3 font-mono text-sm tracking-widest uppercase font-bold hover:bg-white transition-colors">
                  Inquire about specific parts
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </PageTransition>
  );
}
