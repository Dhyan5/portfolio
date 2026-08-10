"use client";

import { motion } from "framer-motion";

export default function CanvasLoadingSkeleton() {
  return (
    <motion.div
      className="skeleton-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      aria-label="Loading 3D scene"
    >
      <div className="skeleton-shell">
        <div className="skeleton-block skeleton-main" />
        <div className="skeleton-grid">
          <div className="skeleton-block" />
          <div className="skeleton-block" />
          <div className="skeleton-block" />
        </div>
      </div>
    </motion.div>
  );
}
