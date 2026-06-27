import React, { useState } from "react";
import { PageTransition, PageHeader, FadeIn } from "@/components/layout/PageTransition";
import { MapPin, Phone, Mail, Building, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const interest = (form.elements.namedItem("interest") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Inquiry from ${name} — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${company}\nEmail: ${email}\nArea of Interest: ${interest}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@eurokash.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Ready",
        description: "Your email client has been opened with the inquiry pre-filled. Please send the email to complete your submission.",
        variant: "default",
      });
      form.reset();
    }, 1000);
  };

  return (
    <PageTransition>
      <PageHeader title="Command Center" subtitle="Initiate Contact" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24 mb-20">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-display font-bold uppercase mb-6">Headquarters</h2>
                <div className="bg-card border border-primary/20 p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-mono text-sm tracking-widest text-primary uppercase mb-1">Company</h4>
                      <p className="font-bold text-lg">EUROKASH ENGINEERS & CONSULTANTS</p>
                      <p className="text-sm text-foreground/60 mt-1">Established 1989</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-mono text-sm tracking-widest text-primary uppercase mb-1">Location</h4>
                      <p className="text-foreground/80">New Delhi, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-mono text-sm tracking-widest text-primary uppercase mb-1">Electronic Mail</h4>
                      <a href="mailto:info@eurokash.com" className="text-foreground/80 hover:text-primary transition-colors">
                        info@eurokash.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-mono text-sm tracking-widest text-primary uppercase mb-1">Phone</h4>
                      <a href="tel:+919811339188" className="text-foreground/80 hover:text-primary transition-colors font-mono" data-testid="link-contact-phone">
                        +91 98113 39188
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-mono text-sm tracking-widest text-foreground uppercase mb-4 border-b border-primary/20 pb-2">Business Operations</h3>
                <ul className="text-sm text-foreground/70 space-y-2 font-mono">
                  <li>Industrial Equipment Distribution</li>
                  <li>Project Consultancy</li>
                  <li>Modernization & Reconstruction</li>
                  <li>Global Sourcing (CIS focus)</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <div className="bg-card border border-primary/30 p-8 md:p-12 relative overflow-hidden">
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                
                <h2 className="text-3xl font-display font-bold uppercase mb-2">Submit Inquiry</h2>
                <p className="text-foreground/60 text-sm mb-8 font-mono">ALL FIELDS ARE REQUIRED FOR PROCESSING.</p>

                <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-primary uppercase tracking-widest">Full Name / Designation</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full bg-background border border-primary/20 p-3 text-foreground font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="ENTER NAME"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-mono text-primary uppercase tracking-widest">Organization</label>
                      <input 
                        type="text" 
                        id="company" 
                        required
                        className="w-full bg-background border border-primary/20 p-3 text-foreground font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="ENTER COMPANY"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-primary uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-background border border-primary/20 p-3 text-foreground font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder="ENTER EMAIL"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-xs font-mono text-primary uppercase tracking-widest">Area of Interest</label>
                      <select 
                        id="interest"
                        required
                        defaultValue=""
                        className="w-full bg-background border border-primary/20 p-3 text-foreground font-mono text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none"
                        data-testid="select-interest"
                      >
                        <option value="" disabled>SELECT AREA...</option>
                        <option value="equipment">Equipment Sourcing</option>
                        <option value="modernization">Plant Modernization</option>
                        <option value="consultancy">Project Consultancy</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-primary uppercase tracking-widest">Message / Specification</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full bg-background border border-primary/20 p-3 text-foreground font-sans text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Enter technical requirements or inquiry details..."
                      data-testid="input-message"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-background py-4 font-mono font-bold tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-submit-inquiry"
                  >
                    {isSubmitting ? (
                      "TRANSMITTING..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> TRANSMIT INQUIRY
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
