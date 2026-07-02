"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-border-color/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Dhyan S Shetty
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground-secondary">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#education" className="hover:text-foreground transition-colors">Education</Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Resume</a>
        </nav>
      </div>
    </header>
  );
}
