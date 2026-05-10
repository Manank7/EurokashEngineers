import React from "react";
import { motion } from "framer-motion";

export function PageTransition({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen pt-24 pb-12 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Reusable animated section wrapper
export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Industrial Header for Pages
export function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="relative py-20 mb-12 overflow-hidden border-b border-primary/20">
      {/* Abstract technical background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff1_1px,transparent_1px),linear-gradient(to_bottom,#0ff1_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-primary/30" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-primary/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="font-mono text-sm tracking-[0.2em] text-primary uppercase">
              {subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-wide text-foreground">
            {title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
