"use client";

import { ArrowUp, Mail } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0d0d10] py-12 border-t border-border-color relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-xs font-mono-tech text-foreground-secondary gap-1">
          <p>© 2026 Dhyan S Shetty. All Rights Reserved.</p>
          <p className="text-foreground-secondary/60">
            Information Science Engineer
          </p>
        </div>

        {/* Links & Scroll Top */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech uppercase tracking-[0.12em] text-foreground-secondary">
          <a
            href="https://github.com/Dhyan5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/dhyan-shetty5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent flex items-center gap-1.5 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="mailto:dhyanshetty7@gmail.com"
            className="hover:text-accent flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-accent hover:underline font-semibold group ml-2"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
