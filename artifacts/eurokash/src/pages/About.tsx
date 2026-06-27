import React from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { CheckCircle2, Factory, Network, Target, Users, Phone } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <PageHeader title="Our Legacy" subtitle="Established 1989" />

      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <section className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold uppercase mb-6">
              Premier Industrial Equipment Distributor
            </h2>
            <div className="space-y-4 text-foreground/80 font-sans leading-relaxed text-lg text-justify">
              <p>
                Eurokash Engineers & Consultants is a premier trading house and industrial equipment distributor, specializing in the sourcing and supply of high-quality machinery and spare parts for diverse industries.
              </p>
              <p>
                For over 35 years, we have provided trusted solutions to the Steel, Power, Petrochemical, Refinery, Mining, Nuclear, Defence and Heavy Engineering sectors.
              </p>
              <p>
                With a vast global network of suppliers, including key manufacturers from CIS countries (former USSR), Germany, Italy and Poland, Eurokash is committed to delivering top-tier industrial solutions that enhance productivity and efficiency.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-primary/20 pt-8">
              <div>
                <div className="text-xs font-mono text-primary tracking-widest uppercase mb-1">Headquarters</div>
                <div className="font-bold">New Delhi, India</div>
              </div>
              <div>
                <div className="text-xs font-mono text-primary tracking-widest uppercase mb-1">Industry Focus</div>
                <div className="font-bold">Distribution & Consultancy</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-primary font-mono text-sm">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+919811339188" className="hover:text-white transition-colors tracking-widest" data-testid="link-about-phone">
                +91 98113 39188
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative p-1 bg-gradient-to-br from-primary/30 to-transparent">
              <div className="bg-card p-8 border border-primary/10">
                <img 
                  src="/images/services.png" 
                  alt="Engineers consulting" 
                  className="w-full h-auto object-cover grayscale-[0.5] contrast-125 mix-blend-luminosity opacity-80"
                />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Why Trust Section */}
        <section className="mb-24">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold uppercase inline-block border-b-2 border-primary pb-2">
                Why Trust Eurokash
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: "Industry Expertise",
                desc: "Over 35 years of experience in industrial equipment sourcing, project consultancy, and modernization."
              },
              {
                icon: Network,
                title: "Global Network",
                desc: "Access to high-quality equipment and technology from renowned manufacturers in Europe, CIS countries, and India."
              },
              {
                icon: Target,
                title: "End-to-End Solutions",
                desc: "From consultancy and feasibility studies to equipment supply, installation, and modernization."
              },
              {
                icon: CheckCircle2,
                title: "Commitment to Quality",
                desc: "A focus on high standards of quality, safety, and reliability in all products and services."
              },
              {
                icon: Users,
                title: "Customer-Centric",
                desc: "Tailored solutions designed to meet the unique needs of each client, ensuring long-term partnerships."
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-primary/10 p-6 h-full hover:border-primary/40 transition-colors">
                  <feature.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold uppercase mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed text-justify">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
