"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function PremiumLoader() {
  const [visible, setVisible] = useState(true);
  const [techIndex, setTechIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const scrollAccumulator = useRef(0);

  // Cycle tech index as percentage increases
  useEffect(() => {
    const totalTechs = techStack.length;
    const segment = 100 / totalTechs;
    const currentSegmentIndex = Math.min(
      totalTechs - 1,
      Math.floor(percentage / segment)
    );
    setTechIndex(currentSegmentIndex);
  }, [percentage]);

  // Handle scroll / wheel / touchmove events to increment percentage
  useEffect(() => {
    if (!visible) return;

    // Prevent background scrolling while the loader is active
    document.body.style.overflow = "hidden";

    const handleScrollEvent = (e: WheelEvent | TouchEvent) => {
      let delta = 0;
      if ("deltaY" in e) {
        delta = e.deltaY;
      } else if (e.touches && e.touches.length > 0) {
        // Simple touch delta simulation
        delta = 15; // default step down for touch drags
      }

      if (delta > 0) {
        scrollAccumulator.current += delta;
        // Require scroll effort (threshold) to increase percentage
        if (scrollAccumulator.current >= 30) {
          setPercentage((prev) => {
            const next = prev + 5;
            return next > 100 ? 100 : next;
          });
          scrollAccumulator.current = 0;
        }
      }
    };

    window.addEventListener("wheel", handleScrollEvent, { passive: true });
    window.addEventListener("touchmove", handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScrollEvent);
      window.removeEventListener("touchmove", handleScrollEvent);
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Hide loader and restore overflow once percentage reaches 100
  useEffect(() => {
    if (percentage >= 100) {
      const t = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(t);
    }
  }, [percentage]);

  const { name, icon } = techStack[techIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Neon Grid Overlay Background */}
          <div className="loader-bg-grid" />
          <div className="loader-bg-glow" />

          {/* Top Left: User's Name */}
          <div className="loader-header">
            <span className="loader-author-tag">DHYAN S SHETTY</span>
            <span className="loader-status-dot" />
          </div>

          {/* Main Visual Center Left / Center */}
          <div className="loader-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                className="loader-tech-display"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="loader-icon-wrapper">
                  <img src={icon} alt={name} className="loader-logo" />
                </div>
                <h1 className="loader-text">{name.toUpperCase()}</h1>
              </motion.div>
            </AnimatePresence>
            
            <p className="loader-subtext">
              SCROLL FASTER TO KNOW ME
            </p>
          </div>

          {/* Bottom Right: Progress Indicator */}
          <div className="loader-footer">
            <div className="loader-progress-bar-container">
              <motion.div 
                className="loader-progress-bar"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className="loader-percentage-container">
              <span className="loader-percentage-label">ENGINE INERTIA LOCKED</span>
              <span className="loader-percentage">{percentage}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
