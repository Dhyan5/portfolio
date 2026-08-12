"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "experience", "education", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Leadership", href: "#experience", id: "experience" },
    { name: "Academics", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
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
          className="text-lg font-bold tracking-[0.12em] uppercase text-foreground flex items-center gap-2 font-mono-tech group active:scale-95 transition-transform"
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
              className={`interactive-hover transition-colors ${activeSection === link.id ? "text-accent font-bold" : "hover:text-accent"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/IJQesK97l3lKZUOVCx/view?usp=drive_link"
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
          className="md:hidden p-2.5 rounded-xl border border-accent/20 bg-accent/5 text-foreground hover:text-accent active:scale-95 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Animated Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#000000]/95 border-b border-accent/30 backdrop-blur-2xl px-6 py-6 font-mono-tech text-sm uppercase shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 px-4 rounded-xl border transition-all active:scale-[0.98] flex items-center justify-between ${activeSection === link.id
                        ? "bg-accent/15 border-accent/40 text-accent font-bold shadow-[0_0_15px_rgba(57,255,20,0.15)]"
                        : "border-white/5 text-foreground-secondary hover:text-accent hover:border-accent/20"
                      }`}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://drive.google.com/file/d/1Py75qObC_QxqyAIJQesK97l3lKZUOVCx/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive-hover w-full py-3 px-4 rounded-xl bg-accent text-[#000000] font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)] active:scale-[0.98]"
                >
                  <span>View Official Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/Dhyan5"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive-hover w-full py-3 px-4 rounded-xl bg-white/5 border border-white/15 text-foreground font-semibold text-center flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

