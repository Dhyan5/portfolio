"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Layers, ShieldCheck, GraduationCap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Terminal,
      title: "Python & Core Systems",
      description: "Hands-on experience developing Python-based systems, computer vision pipelines, and modular backend architectures.",
    },
    {
      icon: Cpu,
      title: "OS & Performance Optimization",
      description: "Deep interest in OS-level resource management, low-level monitoring, and performance tuning for latency-sensitive tasks.",
    },
    {
      icon: Layers,
      title: "Full-Stack & WebGL",
      description: "Building production-grade web applications with modern client-server architectures, REST APIs, and 3D WebGL graphics.",
    },
    {
      icon: ShieldCheck,
      title: "Linux & DevOps Workflows",
      description: "Proficient with Linux environments, containerization fundamentals (Docker), and automated CI/CD via GitHub Actions.",
    },
  ];

  return (
    <section id="about" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mb-16"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block font-semibold">
            01 // BACKGROUND & SUMMARY
          </span>
          <h2 className="interactive-hover text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Engineering Systems with Intent
          </h2>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-balance">
            Information Science Engineering undergraduate passionate about performance-driven software, computer vision, and modern full-stack development.
          </p>
        </motion.div>

        {/* Education Highlight Card with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="interactive-hover w-full glass-card rounded-2xl p-8 md:p-10 mb-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap className="w-32 h-32 text-accent" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-mono-tech text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-3 inline-block font-semibold">
                CURRENT DEGREE
              </span>
              <h3 className="interactive-hover text-2xl md:text-3xl font-bold text-foreground mb-2">
                Bachelor of Engineering in Information Science and Engineering
              </h3>
              <p className="text-foreground-secondary text-base md:text-lg">
                Sahyadri College of Engineering and Management — Mangaluru, India
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <span className="text-xl font-mono-tech font-semibold text-accent">
                2023 — 2027
              </span>
              <span className="text-xs text-foreground-secondary font-mono-tech uppercase">
                Undergraduate
              </span>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="interactive-hover glass-card rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-foreground-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
