"use client";

import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
      aria-label="Loading intro"
    >
      <motion.div
        className="intro-logo-wrap"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.div
          className="intro-logo-ring"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        />

        <motion.span
          className="intro-logo-text"
          animate={{ letterSpacing: ["0.2em", "0.38em", "0.2em"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          DHYAN SHETTY
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
