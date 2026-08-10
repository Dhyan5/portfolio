"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-accent/20 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between edge-frame py-2">
        <Link href="/" className="text-xl font-semibold tracking-[0.08em] uppercase text-foreground">
          Dhyan S Shetty
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-foreground-secondary">
          <Link href="#about" className="interactive-hover hover:text-foreground transition-colors">About</Link>
          <Link href="#projects" className="interactive-hover hover:text-foreground transition-colors">Projects</Link>
          <Link href="#education" className="interactive-hover hover:text-foreground transition-colors">Education</Link>
          <Link href="#skills" className="interactive-hover hover:text-foreground transition-colors">Skills</Link>
          <Link href="#contact" className="interactive-hover hover:text-foreground transition-colors">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="interactive-hover px-4 py-2 rounded-full border border-white/20 text-foreground hover:border-accent hover:text-accent transition-colors">Resume</a>
        </nav>
      </div>
    </header>
  );
}
