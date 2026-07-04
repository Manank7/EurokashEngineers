import React from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { Link } from "wouter";
import { Cog, Droplets, Zap, Wind, Gauge, Thermometer, Wrench, CircuitBoard, Cpu, Settings2 } from "lucide-react";

export default function Products() {
  const mechanicalCategories = [
    {
      title: "Turbines & Turbogenerators",
      icon: Zap,
      desc: "Steam turbines (condensing, back pressure, driving), hydraulic turbines (Francis, Kaplan, Pelton, pump-turbine), gas turbines and turbogenerators for massive-scale power generation."
    },
    {
      title: "Pumps",
      icon: Droplets,
      desc: "Dynamic & volumetric pumps and pump units (pumps with electric motors) for different types of liquids used in heavy industries, including specialized slurry pumps."
    },
    {
      title: "Compressors & Exhausters",
      icon: Wind,
      desc: "Centrifugal, reciprocal and screw type air and gas compressors, exhausters, superchargers, turbochargers, fans and blowers for gas compressor stations and power generation."
    },
    {
      title: "Valves",
      icon: Gauge,
      desc: "Gate valves, stop valves, return valves, safety valves, throttle-control valves, impulse valves and hot blast stove valves for power plants, steel plants and nuclear power stations."
    },
    {
      title: "Boilers & Heat Exchangers",
      icon: Thermometer,
      desc: "Steam boilers, hot and warm water boilers, air and gas coolers, heat exchangers, gas cylinders, tanks and other auxiliary mechanical equipment."
    },
    {
      title: "Presses, Forging & Casting",
      icon: Settings2,
      desc: "Mechanical and hydraulic presses, manipulators, forming machines and other forging equipment. First-quality mill rolls, castings, forgings, ingots and finished products."
    },
    {
      title: "Gearboxes, Reducers & Bearings",
      icon: Cog,
      desc: "Various types of gearboxes and reducers applicable in main and auxiliary equipment. Sleeve bearings and roll bearings of different modifications and purpose."
    },
    {
      title: "Electrolysers & Filters",
      icon: CircuitBoard,
      desc: "Different types of electrolysers, filters and other equipment used to produce hydrogen, oxygen, oxygen/hydrogen mix and oxyhydrogen gas by means of electrolysis of water."
    },
    {
      title: "Machine Tools (CNC)",
      icon: Wrench,
      desc: "High quality machine tools including CNC: lathes, vertical and horizontal drilling, boring, milling, turning, cutting and grinding machines, centers and other equipment."
    }
  ];

  const electricalCategories = [
    {
      title: "Low Voltage Control Gear",
      icon: Cpu,
      desc: "Contactors and switches with rated voltage up to 1000 V AC and up to 1500 V DC for industrial control applications."
    },
    {
      title: "High Voltage Gear & Equipment",
      icon: Zap,
      desc: "Oil power transformers for voltage 6–110 kV, smoothly regulated arcing oil reactors, and high voltage circuit-breakers."
    },
    {
      title: "Electric Machines & Drives",
      icon: Settings2,
      desc: "Asynchronous electric motors (100–32,000 kW, 380V–6(11) kV), synchronous motors and generators, excitation systems, and frequency converters."
    }
  ];

  const generalEquipment = [
    "Centrifugal Pumps (including slurry pumps)",
    "Electric Motors (HT/LT, DC/AC)",
    "High-Pressure Valves",
    "Steam Boilers, Turbines & Equipment",
    "Compressors, Exhauster & Blowers",
    "Circuit Breakers, Relays, Thyristors, Contactors",
    "Rolling Mill Equipment",
    "Machine Tools & Presses (Forging, Hydraulic)"
  ];

  return (
    <PageTransition>
      <PageHeader title="Products & Sourcing" subtitle="Precision Engineering Supply" />

      <div className="container mx-auto px-4 md:px-6">

        {/* Banner Image */}
        <FadeIn className="mb-20">
          <div className="w-full h-64 md:h-96 relative border border-foreground/20 overflow-hidden">
            <img
              src="/images/products.png"
              alt="Industrial Equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1200] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-display font-bold uppercase text-amber-100 drop-shadow-md">Heavy Machinery Supply</h2>
            </div>
          </div>
        </FadeIn>

        {/* MECHANICAL EQUIPMENT */}
        <div className="mb-24">
          <FadeIn>
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[2px] w-8 bg-amber-500" />
                <span className="font-mono text-xs tracking-widest text-amber-500 uppercase">Category 01</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase border-b border-amber-600/40 pb-3">
                Mechanical Equipment
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanicalCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="flex gap-5 p-6 border border-foreground/10 bg-card hover:border-amber-600/50 transition-colors h-full">
                  <div className="shrink-0 text-amber-500 mt-1">
                    <cat.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase mb-2 text-foreground">{cat.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed text-justify">{cat.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* POWER & ELECTRICAL EQUIPMENT */}
        <div className="mb-24">
          <FadeIn>
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">Category 02</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase border-b border-primary/30 pb-3">
                Power & Electrical Equipment
              </h3>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {electricalCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-5 p-6 border border-foreground/10 bg-card hover:border-primary/50 transition-colors h-full">
                  <div className="shrink-0 text-primary mt-1">
                    <cat.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold uppercase mb-2 text-foreground">{cat.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed text-justify">{cat.desc}</p>
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
            <div className="bg-card border border-foreground/10 p-6">
              <ul className="space-y-3">
                {generalEquipment.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-mono text-sm border-b border-foreground/5 pb-3 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 bg-amber-500 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-display font-bold uppercase mb-6">Specialized Sourcing</h3>
            <div className="text-foreground/80">
              <p className="text-justify leading-relaxed mb-6">
                A core competency of Eurokash is the location, acquisition, and delivery of highly specialized equipment from our international network spanning 10+ countries.
              </p>

              <div className="bg-amber-950/30 border-l-4 border-amber-600 p-6 my-6">
                <h4 className="font-display uppercase text-amber-400 text-lg font-bold mb-2">CIS & Eastern European Network</h4>
                <p className="text-sm font-sans text-justify leading-relaxed">
                  We specialize in the sourcing of mechanical, electrical, hydraulic, and processing equipment specifically from manufacturers in Russia and Ukraine. We are experts in reconstructing and modernizing legacy Russian and CIS-origin equipment for Indian heavy industries.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link href="/contact" className="inline-block bg-amber-600 text-background px-6 py-3 font-mono text-sm tracking-widest uppercase font-bold hover:bg-amber-400 transition-colors">
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