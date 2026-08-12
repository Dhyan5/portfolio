"use client";

import { motion } from "framer-motion";
import { Code, Server, Eye, Cpu, Terminal, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      skills: ["Python", "C++", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      name: "Web / Backend Architecture",
      icon: Server,
      skills: ["Flask", "REST APIs", "Client-Server Architecture", "Responsive Design"],
    },
    {
      name: "AI & Computer Vision",
      icon: Eye,
      skills: ["OpenCV", "MediaPipe", "Real-Time Video Processing"],
    },
    {
      name: "Systems Engineering",
      icon: Cpu,
      skills: [
        "Linux Environment",
        "Process Monitoring",
        "Resource Analysis (CPU/GPU/Disk)",
        "System Logging",
      ],
    },
    {
      name: "DevOps & Cloud Infrastructure",
      icon: Terminal,
      skills: ["Docker (Fundamentals)", "GitHub Actions (CI/CD)", "AWS EC2 / S3 (Basics)"],
    },
    {
      name: "Developer Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
  ];

  return (
    <section id="skills" className="w-full py-28 relative border-t border-border-color">
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
            05 // TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Core languages, systems architecture, computer vision libraries, and DevOps tooling.
          </p>
        </motion.div>

        {/* Skills Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 border border-accent/15 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {category.name}
                  </h3>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2.5 mb-2">
                  {category.skills.map((skill, sIndex) => (
                    <motion.span
                      key={sIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.1 + sIndex * 0.04 }}
                      className="interactive-hover px-3.5 py-2 rounded-xl bg-accent/5 border border-accent/20 font-mono-tech text-xs text-foreground hover:text-accent hover:border-accent hover:bg-accent/10 transition-all font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono-tech text-foreground-secondary/70">
                {category.skills.length} core competencies
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
