"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-[1200px] min-h-[92vh] flex flex-col justify-center items-center px-6 lg:px-12 pt-28 pb-20 text-center edge-frame">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl flex flex-col items-center"
      >
        <span className="mb-6 text-xs uppercase tracking-[0.24em] text-foreground-secondary">Design Lead and Creative Engineer</span>

        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-background-secondary mb-8 ring-2 ring-accent/40 shadow-[0_0_0_8px_rgba(255,215,0,0.08)] interactive-hover">
          <Image
            src="/profile.jpg"
            alt="Dhyan S Shetty"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        
        <h2 className="text-base md:text-lg font-medium text-foreground-secondary mb-2 tracking-[0.08em] uppercase">Hi, I am</h2>
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-5 tracking-[-0.04em] leading-[0.95]">Dhyan Shetty</h1>
        <h3 className="text-xl md:text-3xl font-medium text-foreground-secondary mb-8 text-balance max-w-3xl">
          Building emotionally resonant digital products with code, motion, and systems thinking.
        </h3>
        
        <p className="text-base md:text-lg text-foreground-secondary max-w-2xl mb-12 leading-relaxed text-balance">
          I am passionate about crafting software that solves real-world problems through clean architecture, intentional visuals, and practical engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#projects" className="interactive-hover w-full sm:w-auto px-8 py-3.5 bg-accent text-[#031215] rounded-full font-bold uppercase tracking-[0.08em] text-sm flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_4px_24px_rgba(255,215,0,0.25)] transition-transform">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="interactive-hover w-full sm:w-auto px-8 py-3.5 bg-transparent text-foreground rounded-full font-semibold uppercase tracking-[0.08em] text-sm border border-white/20 flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-colors">
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
