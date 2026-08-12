"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-[1200px] min-h-[88vh] flex flex-col justify-center items-center px-6 lg:px-12 pt-20 pb-16 text-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl flex flex-col items-center z-10"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono-tech text-accent font-semibold">
            Information Science Engineer
          </span>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative group"
        >
          {/* Neon glow ring behind photo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 via-accent/20 to-accent/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/50 shadow-[0_0_30px_rgba(57,255,20,0.2)] group-hover:shadow-[0_0_50px_rgba(57,255,20,0.4)] transition-shadow duration-500">
            <Image
              src="/profile.jpg"
              alt="Dhyan S Shetty"
              width={160}
              height={160}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Sub-greeting */}
        <h2 className="text-sm md:text-base font-mono-tech uppercase tracking-[0.25em] text-foreground-secondary mb-3">
          Hi, I am
        </h2>

        {/* Main Name Heading */}
        <h1 className="interactive-hover text-6xl sm:text-7xl md:text-9xl font-extrabold text-foreground mb-6 tracking-tight leading-[0.95] drop-shadow-2xl">
          Dhyan S Shetty
        </h1>

        {/* Role & Core Philosophy */}
        <h3 className="text-xl md:text-3xl font-medium text-foreground-secondary mb-8 text-balance max-w-3xl leading-snug">
          Architecting high-performance <span className="text-accent font-semibold">Python systems</span>, computer vision pipelines, and production full-stack applications.
        </h3>

        {/* Overview Paragraph */}
        <p className="text-base md:text-lg text-foreground-secondary max-w-2xl mb-10 leading-relaxed text-balance">
          Focused on OS-level resource management, modular software design, and performance optimization aligned with modern DevOps and Linux workflows.
        </p>

        {/* Technical Highlights Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono-tech text-xs text-foreground-secondary">
          <span className="interactive-hover glass-pill px-3.5 py-2 rounded-md flex items-center gap-1.5 cursor-pointer">
            <Terminal className="w-3.5 h-3.5 text-accent" /> Python & C++ Systems
          </span>
          <span className="interactive-hover glass-pill px-3.5 py-2 rounded-md flex items-center gap-1.5 cursor-pointer">
            <Sparkles className="w-3.5 h-3.5 text-accent" /> WebGL & 3D Visuals
          </span>
          <span className="interactive-hover glass-pill px-3.5 py-2 rounded-md flex items-center gap-1.5 cursor-pointer">
            Computer Vision Pipelines
          </span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="interactive-hover w-full sm:w-auto px-8 py-4 bg-accent text-[#000000] rounded-full font-bold uppercase tracking-[0.1em] text-xs font-mono-tech flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://drive.google.com/file/d/1Py75qObC_QxqyAIJQesK97l3lKZUOVCx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover w-full sm:w-auto px-8 py-4 bg-accent/10 text-accent rounded-full font-bold uppercase tracking-[0.1em] text-xs font-mono-tech border border-accent/40 flex items-center justify-center gap-2 hover:bg-accent hover:text-[#000000] shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="interactive-hover w-full sm:w-auto px-8 py-4 bg-transparent text-foreground rounded-full font-semibold uppercase tracking-[0.1em] text-xs font-mono-tech border border-white/20 flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground-secondary/60 text-xs font-mono-tech tracking-widest uppercase"
      >
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-accent" />
      </motion.div>
    </section>
  );
}
