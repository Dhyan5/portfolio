"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Terminal, ShieldCheck } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════
 *  Tech Stack Icons Data (Python, Java, C++, Git, Figma, Linux)
 * ═══════════════════════════════════════════════════════════════════ */
const TECH_STACK = [
  {
    name: "Python",
    role: "Systems & AI Pipelines",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.927 0C6.186 0 6.536 2.49 6.536 2.49v2.58H12s2.634-.037 2.634 2.584v2.62H9.034S6.4 10.311 6.4 12.957v5.228s-.35 2.547 5.39 2.547c5.74 0 5.39-2.547 5.39-2.547v-2.583H12s-2.634.037-2.634-2.584v-2.62h5.602s2.634-.037 2.634-2.584V5.113S17.668 0 11.927 0zm-2.14 1.488a.952.952 0 1 1 0 1.904.952.952 0 0 1 0-1.904zm4.28 17.636a.952.952 0 1 1 0 1.905.952.952 0 0 1 0-1.905z"/>
      </svg>
    ),
  },
  {
    name: "Java",
    role: "Enterprise Backends",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.654.714c1.92.217 3.993.208 5.92-.075 1.572-.23.633-.639.633-.639s-1.077.348-3.324.394c-2.42.049-3.883-.394-3.883-.394zm-.687-3.037s-1.1.722.753.896c2.257.213 4.887.21 7.151-.097 1.839-.249.827-.799.827-.799s-1.427.464-3.994.498c-2.913.038-4.737-.498-4.737-.498zm9.645-3.856c.264 1.401-1.393 2.529-1.393 2.529s.912-.662.338-1.578c-.689-1.099-2.073-1.636-3.811-2.091-2.222-.581-4.733-1.272-4.733-2.923 0-1.859 2.052-2.738 3.518-3.003-1.401.761-1.625 1.761-1.218 2.593.57 1.164 2.457 1.626 4.391 2.074 2.22.514 3.428 1.127 2.908 2.399zm-10.74 8.797s-1.126.793.916 1.059c2.757.36 6.002.302 8.729-.115 2.277-.349 1.037-.944 1.037-.944s-1.748.563-4.873.616c-3.567.061-5.809-.616-5.809-.616z"/>
      </svg>
    ),
  },
  {
    name: "C++",
    role: "High-Performance Systems",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.75 5.92v12.16L12 24l10.25-5.92V5.92L12 0zm-1.5 15.5h-2v-7h2v7zm6 0h-2v-2.5h-1.5v-2H16.5v-2.5h2v2.5H20v2h-1.5v2.5z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    role: "Version Control & DevOps",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-2.006l-2.477-2.48v6.402c.162.079.317.185.44.308.72.72.72 1.886 0 2.606-.72.72-1.885.72-2.604 0-.721-.72-.721-1.886 0-2.606.143-.144.307-.253.483-.328V9.75c-.176-.075-.34-.185-.483-.328-.538-.539-.675-1.334-.406-2.002L6.155 4.646.452 10.35c-.603.604-.603 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.428-10.428c.604-.603.604-1.581 0-2.188z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    role: "UI/UX & Prototyping",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4 1.792-4 4zm8-4h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zm4 16c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8h4z"/>
      </svg>
    ),
  },
  {
    name: "Linux",
    role: "Kernel & Resource Tuning",
    color: "#39ff14",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.01 0C8.36 0 5.4 2.96 5.4 6.61c0 1.25.35 2.42.96 3.42L3.6 14.4c-.45.67-.18 1.57.54 1.89l3.48 1.55c.78.35 1.68-.02 2.01-.81l.9-2.16c.47.1.96.15 1.48.15.52 0 1.01-.05 1.48-.15l.9 2.16c.33.79 1.23 1.16 2.01.81l3.48-1.55c.72-.32.99-1.22.54-1.89l-2.76-4.37c.61-1 1-2.17 1-3.42C18.62 2.96 15.66 0 12.01 0zM9.5 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm5.02 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
      </svg>
    ),
  },
];

export default function IntroLoader() {
  const [activeStep, setActiveStep] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    // Stagger tech stack items step by step
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < TECH_STACK.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 450);

    return () => clearInterval(timer);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 15 || e.deltaY < -15) {
      if (activeStep < TECH_STACK.length) {
        setActiveStep((prev) => Math.min(prev + 1, TECH_STACK.length));
      } else {
        setDismissed(true);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      const currentY = e.touches[0].clientY;
      const diffY = touchStartY - currentY;
      if (diffY > 30) {
        if (activeStep < TECH_STACK.length) {
          setActiveStep((prev) => Math.min(prev + 1, TECH_STACK.length));
        } else {
          setDismissed(true);
        }
      }
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="fixed inset-0 z-50 bg-[#000000]/95 backdrop-blur-3xl flex flex-col justify-between items-center px-6 py-10 font-mono-tech select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex items-center justify-between z-10 border-b border-accent/20 pb-4"
          >
            <div className="flex items-center gap-2 text-foreground font-bold text-sm tracking-widest uppercase">
              <span className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/40 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(57,255,20,0.3)]">
                <Terminal className="w-4 h-4" />
              </span>
              <span>DHYAN S SHETTY</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>SYSTEM INIT</span>
            </div>
          </motion.div>

          {/* Center Stage — Tech Stack Icons Appearing One By One */}
          <div className="w-full max-w-4xl flex flex-col items-center justify-center z-10 my-auto py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mb-10"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-2 block font-semibold">
                // ARCHITECTURAL CORE
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                Tech Stack Matrix
              </h1>
            </motion.div>

            {/* Grid of 6 Core Tech Stack Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 w-full mb-10">
              {TECH_STACK.map((tech, idx) => {
                const isVisible = idx < activeStep;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 40, scale: 0.7 }}
                    animate={
                      isVisible
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0.15, y: 20, scale: 0.85 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`glass-card rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
                      isVisible
                        ? "border-accent/60 bg-accent/10 shadow-[0_0_30px_rgba(57,255,20,0.25)] scale-105"
                        : "border-white/10 bg-white/5 opacity-30 grayscale"
                    }`}
                  >
                    {/* Glowing ring on active reveal */}
                    {isVisible && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 rounded-2xl border-2 border-accent"
                      />
                    )}

                    <div className="mb-3 text-accent transition-transform duration-300 transform group-hover:scale-110">
                      {tech.svg}
                    </div>

                    <h3 className="text-sm font-bold text-foreground mb-1 tracking-wider">
                      {tech.name}
                    </h3>
                    <span className="text-[10px] text-foreground-secondary leading-tight hidden md:block">
                      {tech.role}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Step Status Bar */}
            <div className="w-full max-w-xs bg-white/10 rounded-full h-1.5 overflow-hidden mb-6 border border-accent/20">
              <motion.div
                className="bg-accent h-full shadow-[0_0_12px_#39ff14]"
                animate={{ width: `${(activeStep / TECH_STACK.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <p className="text-xs text-foreground-secondary/70">
              {activeStep < TECH_STACK.length
                ? `Initializing modules (${activeStep}/${TECH_STACK.length})...`
                : "All core technical modules loaded."}
            </p>
          </div>

          {/* Bottom Call to Action Prompt */}
          <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 z-10 border-t border-accent/20 pt-6">
            <div className="flex items-center gap-3 text-accent text-xs">
              <ChevronDown className="w-5 h-5 animate-bounce text-accent" />
              <span className="tracking-widest uppercase font-semibold">
                Swipe / Scroll Down To Enter
              </span>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="interactive-hover px-6 py-3 rounded-full bg-accent text-[#000000] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_35px_rgba(57,255,20,0.6)] active:scale-95 transition-all"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
