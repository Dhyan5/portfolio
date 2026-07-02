"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background-secondary py-12 mt-24 border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-sm text-foreground-secondary gap-2">
          <p>© 2026 Dhyan S Shetty.</p>
          <p>Designed and Developed by Dhyan S Shetty.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-foreground-secondary">
          <a href="https://github.com/Dhyan5" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/dhyan-shetty5" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-foreground transition-colors group">
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
