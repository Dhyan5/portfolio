"use client";

import { motion } from "framer-motion";
import { Award, Mail, Phone, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block font-semibold">
            06 // ACHIEVEMENTS & CONNECT
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Open to engineering opportunities, technical collaborations, research projects, and full-stack software development.
          </p>
        </motion.div>

        {/* National Achievement Banner with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-16 border border-accent/40 bg-accent/5 max-w-4xl mx-auto relative overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.1)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono-tech uppercase tracking-wider text-accent font-semibold">
                  NATIONAL ACHIEVEMENT
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Selected for Smart India Hackathon 2025
              </h3>
              <p className="text-foreground-secondary text-sm md:text-base leading-relaxed">
                Selected for the prestigious national-level Smart India Hackathon (SIH 2025), building innovative tech solutions for real-world governance and institutional challenges.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Content Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Direct Minimalist Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact & Links
            </h3>

            <a
              href="mailto:dhyanshetty7@gmail.com"
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-accent/50 flex items-center gap-4 group transition-all block"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-foreground-secondary uppercase tracking-widest block mb-0.5">
                  Email
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors font-mono-tech">
                  dhyanshetty7@gmail.com
                </span>
              </div>
            </a>

            <a
              href="tel:+917619101182"
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-accent/50 flex items-center gap-4 group transition-all block"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-foreground-secondary uppercase tracking-widest block mb-0.5">
                  Phone
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors font-mono-tech">
                  +91 7619101182
                </span>
              </div>
            </a>

            <a
              href="https://github.com/Dhyan5"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-accent/50 flex items-center gap-4 group transition-all block"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-foreground-secondary uppercase tracking-widest block mb-0.5">
                  GitHub Profile
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors font-mono-tech">
                  github.com/Dhyan5
                </span>
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1pYQ_Ek9-73URJT1Q8GYZS4kDaMbfM6Zw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 border border-accent/30 hover:border-accent flex items-center gap-4 group transition-all block shadow-[0_0_15px_rgba(57,255,20,0.1)]"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(57,255,20,0.2)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-accent uppercase tracking-widest block mb-0.5 font-semibold">
                  Official Resume / CV
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors font-mono-tech">
                  View Resume (Google Drive) →
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/dhyan-shetty5"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 border border-white/10 hover:border-accent/50 flex items-center gap-4 group transition-all block"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono-tech text-foreground-secondary uppercase tracking-widest block mb-0.5">
                  LinkedIn Profile
                </span>
                <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors font-mono-tech">
                  linkedin.com/in/dhyan-shetty5
                </span>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-accent mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-foreground-secondary text-sm">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono-tech text-foreground-secondary mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground-secondary/40 focus:outline-none focus:border-accent font-mono-tech text-sm transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono-tech text-foreground-secondary mb-2 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground-secondary/40 focus:outline-none focus:border-accent font-mono-tech text-sm transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono-tech text-foreground-secondary mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground-secondary/40 focus:outline-none focus:border-accent font-mono-tech text-sm transition-colors resize-none"
                    placeholder="Hello Dhyan, I'd like to discuss a project..."
                  />
                </div>

                <button
                  type="submit"
                  className="interactive-hover w-full py-4 bg-accent text-[#000000] rounded-xl font-bold uppercase tracking-[0.1em] text-xs font-mono-tech flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.25)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
