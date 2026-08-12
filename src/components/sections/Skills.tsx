"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Eye, Cpu, Terminal, Wrench, Sparkles } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      icon: Code,
      skills: [
        { name: "Python", desc: "Primary language for systems & CV" },
        { name: "C++", desc: "Low-level & performance engineering" },
        { name: "JavaScript (ES6+)", desc: "Modern frontend & WebGL logic" },
        { name: "HTML5", desc: "Semantic web structuring" },
        { name: "CSS3", desc: "Responsive styling & animations" },
      ],
    },
    {
      id: "backend",
      name: "Web / Backend",
      icon: Server,
      skills: [
        { name: "Flask", desc: "Python REST API microservices" },
        { name: "REST APIs", desc: "Modular JSON service endpoints" },
        { name: "Client-Server Architecture", desc: "Distributed web patterns" },
        { name: "Responsive Design", desc: "Mobile-first layouts & grid systems" },
      ],
    },
    {
      id: "ai",
      name: "AI & Vision",
      icon: Eye,
      skills: [
        { name: "OpenCV", desc: "Real-time image & video processing" },
        { name: "MediaPipe", desc: "Pose & hand tracking pipelines" },
        { name: "Real-Time Video Processing", desc: "Frame buffer manipulation" },
      ],
    },
    {
      id: "systems",
      name: "Systems Engineering",
      icon: Cpu,
      skills: [
        { name: "Linux Environment", desc: "POSIX shell & bash scripting" },
        { name: "Process Monitoring", desc: "OS resource inspection & tracing" },
        { name: "Resource Analysis (CPU/GPU/Disk)", desc: "Performance bottleneck tuning" },
        { name: "System Logging", desc: "Telemetry & syslog aggregation" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: Terminal,
      skills: [
        { name: "Docker (Fundamentals)", desc: "Containerized deployment specs" },
        { name: "GitHub Actions (CI/CD)", desc: "Automated test & build pipelines" },
        { name: "AWS EC2 / S3 (Basics)", desc: "Cloud compute & storage setup" },
      ],
    },
    {
      id: "tools",
      name: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git", desc: "Version control & history tracking" },
        { name: "GitHub", desc: "Collaborative code reviews & PRs" },
        { name: "VS Code", desc: "Primary IDE & debugging" },
        { name: "Postman", desc: "API endpoint testing & validation" },
        { name: "Figma", desc: "UI/UX mockup prototyping" },
      ],
    },
  ];

  const categories = ["All", ...skillCategories.map((c) => c.name)];

  const filteredCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block font-semibold">
            05 // TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Core languages, systems architecture, computer vision libraries, and DevOps tooling. Tap any skill for details.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-6 mb-8 no-scrollbar touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              suppressHydrationWarning
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono-tech text-xs whitespace-nowrap transition-all active:scale-95 flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? "bg-accent text-[#000000] font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                  : "bg-white/5 text-foreground-secondary hover:text-foreground border border-white/10 hover:border-accent/30"
              }`}
            >
              {selectedCategory === cat && <Sparkles className="w-3.5 h-3.5" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {mounted && filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-8 border border-accent/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mb-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() =>
                          setActiveSkill(activeSkill === skill.name ? null : skill.name)
                        }
                        className={`interactive-hover px-3.5 py-2 rounded-xl border font-mono-tech text-xs text-left transition-all active:scale-95 flex flex-col gap-1 ${
                          activeSkill === skill.name
                            ? "bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                            : "bg-accent/5 border-accent/20 text-foreground hover:text-accent hover:border-accent"
                        }`}
                      >
                        <div className="flex items-center gap-2 font-medium">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              activeSkill === skill.name ? "bg-accent animate-pulse" : "bg-accent"
                            }`}
                          />
                          {skill.name}
                        </div>
                        {activeSkill === skill.name && (
                          <span className="text-[10px] text-accent/90 font-sans tracking-normal pl-3">
                            {skill.desc}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 text-[11px] font-mono-tech text-foreground-secondary/70 flex justify-between items-center">
                  <span>{category.skills.length} core competencies</span>
                  <span className="text-accent/60">Tap badge to inspect</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
