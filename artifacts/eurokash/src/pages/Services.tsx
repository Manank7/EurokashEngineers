import React from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { FileText, Wrench, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  return (
    <PageTransition>
      <PageHeader title="Our Services" subtitle="Consultancy & Modernization" />

      <div className="container mx-auto px-4">
        {/* Intro */}
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-xl text-foreground/80 leading-relaxed">
            Beyond procurement, Eurokash provides specialized consultancy, tender management, and modernization services to ensure legacy industrial plants remain competitive and efficient.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Service 1 */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-primary/20 p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 border-b border-primary/20 pb-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Project Consultancy & Liaison</h2>
                </div>
                <p className="text-foreground/80 mb-6">
                  Eurokash's consultancy division has an established track record in executing industrial projects across India. We specialize in the Stone Industry, with successful projects in Marble and Granite sectors in Rajasthan.
                </p>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Project Feasibility Studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>End-to-End Project Execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Liaison with Government Bodies for regulatory clearances, procurement, and tendering</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Service 2 */}
          <FadeIn delay={0.2}>
            <div className="bg-card border border-primary/20 p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Wrench className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 border-b border-primary/20 pb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Equipment & Modernization</h2>
                </div>
                <p className="text-foreground/80 mb-6">
                  We are renowned for providing a wide range of industrial equipment and spare parts from trusted global sources.
                </p>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 mt-1"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div>
                      <strong className="text-foreground block font-sans uppercase text-xs mb-1 tracking-widest text-primary">Equipment Overhauling</strong>
                      <span className="text-foreground/70">Restoring old equipment to improve performance, with OEM support from Russia, Ukraine, and Europe.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 mt-1"><ArrowRight className="w-4 h-4 text-primary" /></div>
                    <div>
                      <strong className="text-foreground block font-sans uppercase text-xs mb-1 tracking-widest text-primary">Spare Parts Supply</strong>
                      <span className="text-foreground/70">Specialized in sourcing parts for metallurgical, power, refinery, mining, and nuclear power.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Global Tender Management */}
        <FadeIn delay={0.3}>
          <div className="bg-primary/5 border border-primary p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 bg-background p-6 border border-primary/30 rounded-full">
              <Globe className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide mb-4">Global Tender Management</h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Managing the complexities of international tenders, including participation in global tenders for industrial projects and equipment. We ensure compliance with both private sector and government tenders, providing competitive solutions tailored to client specifications.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="inline-block border border-primary text-primary px-6 py-2 font-mono text-sm tracking-widest uppercase hover:bg-primary hover:text-background transition-colors">
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
