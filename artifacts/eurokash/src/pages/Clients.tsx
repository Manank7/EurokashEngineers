import React from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { MapPin } from "lucide-react";

export default function Clients() {
  const clients = [
    "Steel Authority of India Ltd. (SAIL)",
    "National Thermal Power Corporation Ltd. (NTPC) — Kahalgaon, Vindhyachal, Sipat, Barh Power Plants",
    "Indian Oil Corporation Ltd. (IOCL)",
    "Gas Authority of India Ltd. (GAIL)",
    "Bharat Heavy Electricals Limited (BHEL)",
    "Tata Consultancy Ltd.",
    "Larsen & Toubro (L&T)",
    "Jindal Steel & Power Ltd.",
    "Engineers India Ltd. (EIL)",
    "Nuclear Power Corporation of India Ltd. (NPCIL)",
    "Hindustan Shipyard Ltd."
  ];

  const offices = [
    { city: "New Delhi", type: "Head Office", desc: "Central operations and strategic management." },
    { city: "Bhilai", type: "Regional Representative", desc: "Serving the local steel industry hub." },
    { city: "Bokaro", type: "Regional Representative", desc: "Covering Kolkata, Durgapur & Ranchi." },
    { city: "Rourkela", type: "Regional Representative", desc: "Dedicated support for local infrastructure." },
    { city: "Visakhapatnam", type: "Regional Representative", desc: "Covering Hyderabad and southern port projects." },
    { city: "Bhopal", type: "Regional Representative", desc: "Central India heavy engineering support." },
    { city: "Kudan Kulam", type: "Regional Representative", desc: "Nuclear power sector operations." },
    { city: "Kolkata", type: "Regional Representative", desc: "Eastern India industrial and port operations." },
    { city: "Jamshedpur", type: "Regional Representative", desc: "Steel belt operations and heavy industry support." },
    { city: "Chennai", type: "Regional Representative", desc: "Southern India manufacturing and defence sector." },
  ];

  return (
    <PageTransition>
      <PageHeader title="Clientele & Presence" subtitle="Trusted Nationwide" />

      <div className="container mx-auto px-4 md:px-6">

        {/* Clients Section */}
        <section className="mb-24">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-display font-bold uppercase mb-4">Prestigious Clientele</h2>
              <p className="text-foreground/70 text-lg text-justify">
                For over three decades, Eurokash has been the trusted partner for India's most critical industrial infrastructure, commanding respect across the public and private sectors.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {clients.map((client, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center p-4 border border-foreground/10 bg-card/50 hover:bg-card hover:border-primary/30 transition-all group">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-150 transition-transform" />
                  <span className="font-mono text-sm tracking-wide text-foreground/90">{client}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="mb-20">
          <FadeIn>
            <div className="border-t border-primary/20 pt-16 mb-12">
              <h2 className="text-3xl font-display font-bold uppercase mb-4">Global Presence, Local Expertise</h2>
              <p className="text-foreground/70 text-lg max-w-3xl text-justify">
                Eurokash is headquartered in New Delhi with regional representatives strategically located across India's major industrial centres, ensuring prompt local support and nation wide service and delivery.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className={`p-6 border ${office.type === 'Head Office' ? 'border-primary bg-primary/5' : 'border-foreground/10 bg-card'} h-full relative`}>
                  {office.type === 'Head Office' && (
                    <div className="absolute top-0 right-0 bg-primary text-background text-[10px] font-mono font-bold px-2 py-1 uppercase tracking-widest">
                      HQ
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <MapPin className={`w-6 h-6 shrink-0 mt-1 ${office.type === 'Head Office' ? 'text-primary' : 'text-foreground/40'}`} strokeWidth={1.5} />
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase mb-1">{office.city}</h3>
                      <div className="font-mono text-xs text-primary tracking-widest uppercase mb-3">{office.type}</div>
                      <p className="text-sm text-foreground/60">{office.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}