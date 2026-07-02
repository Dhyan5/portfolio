"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-[1200px] min-h-[90vh] flex flex-col justify-center items-center px-6 lg:px-12 pt-32 pb-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl flex flex-col items-center"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-background-secondary mb-8 ring-1 ring-border-color/50">
          <Image
            src="/profile.jpg"
            alt="Dhyan S Shetty"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        
        <h2 className="text-xl md:text-2xl font-medium text-foreground-secondary mb-2 tracking-tight">Hi, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">Dhyan S Shetty</h1>
        <h3 className="text-xl md:text-3xl font-medium text-foreground-secondary mb-8 text-balance">
          Information Science Engineering Student.<br className="hidden md:block"/> Building modern software with Python, AI, and Full-Stack Development.
        </h3>
        
        <p className="text-base md:text-lg text-foreground-secondary max-w-2xl mb-12 leading-relaxed text-balance">
          "I'm passionate about building software that solves real-world problems through clean code, thoughtful design, and practical engineering. I enjoy creating applications that are simple, scalable, and user-focused."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background rounded-full font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-background-secondary text-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:bg-border-color/50 transition-colors">
            Download Resume
            <Download className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
