"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 bg-background-secondary border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">Experience</h2>
          
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 mb-4">
              <h3 className="text-2xl font-semibold text-foreground tracking-tight">Lead Designer</h3>
              <span className="text-foreground-secondary font-medium">2025 – Present</span>
            </div>
            <p className="text-xl text-foreground font-medium mb-6">ISDC</p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Leading the design team for departmental events by creating professional visual assets and supporting technical workshops.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
