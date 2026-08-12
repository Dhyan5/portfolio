"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Leadership", href: "#experience" },
    { name: "Academics", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#000000]/90 backdrop-blur-xl border-b border-accent/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.12em] uppercase text-foreground flex items-center gap-2 font-mono-tech group"
        >
          <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:border-accent transition-colors shadow-[0_0_12px_rgba(57,255,20,0.2)]">
            <Terminal className="w-4 h-4" />
          </span>
          <span>Dhyan S Shetty</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono-tech uppercase tracking-[0.15em] text-foreground-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="interactive-hover hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1Py75qObC_QxqyAIJQesK97l3lKZUOVCx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover px-4 py-2 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-[#000000] transition-all font-semibold shadow-[0_0_15px_rgba(57,255,20,0.15)]"
          >
            Resume
          </a>
          <a
            href="https://github.com/Dhyan5"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover px-4 py-2 rounded-full border border-white/20 text-foreground hover:border-accent hover:text-accent transition-all font-semibold"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#000000]/95 border-b border-accent/20 backdrop-blur-2xl px-6 py-6 space-y-4 font-mono-tech text-sm uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground-secondary hover:text-accent transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/Dhyan5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2.5 rounded-full border border-accent text-accent font-semibold"
          >
            GitHub Profile
          </a>
        </div>
      )}
    </header>
  );
}
