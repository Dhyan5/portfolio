"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full bg-background-secondary py-32 border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 tracking-tight">About</h2>
          
          <div className="space-y-8 text-lg md:text-xl text-foreground-secondary leading-relaxed font-medium">
            <p>
              Currently pursuing a Bachelor of Engineering in Information Science and Engineering at Sahyadri College of Engineering and Management.
            </p>
            <p>
              Focused on Python development, Full-Stack Development, Artificial Intelligence, Linux Systems, and modern software engineering.
            </p>
            <p>
              Passionate about learning new technologies and building practical solutions that make everyday tasks easier.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
