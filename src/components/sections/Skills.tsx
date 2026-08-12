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
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", desc: "Primary language for systems & CV" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", desc: "Low-level & performance engineering" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "Modern frontend & WebGL logic" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Semantic web structuring" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", desc: "Responsive styling & animations" },
      ],
    },
    {
      id: "backend",
      name: "Web / Backend",
      icon: Server,
      skills: [
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", desc: "Python REST API microservices" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", desc: "Modular JSON service endpoints" },
        { name: "WebSockets", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", desc: "Real-time communication layers" },
        { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", desc: "Modern utility-first styling" },
      ],
    },
    {
      id: "ai",
      name: "AI & Vision",
      icon: Eye,
      skills: [
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", desc: "Real-time image & video processing" },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", desc: "Deep learning & computer vision models" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", desc: "Scientific computing & array manipulation" },
      ],
    },
    {
      id: "systems",
      name: "Systems Engineering",
      icon: Cpu,
      skills: [
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", desc: "POSIX shell & bash scripting" },
        { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", desc: "Shell scripting & workflow automation" },
        { name: "Windows", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", desc: "OS administration & scripting host" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: Terminal,
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", desc: "Containerized deployment specs" },
        { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Automated test & build pipelines" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", desc: "Cloud compute & storage setup" },
      ],
    },
    {
      id: "tools",
      name: "Developer Tools",
      icon: Wrench,
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", desc: "Version control & history tracking" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Collaborative code reviews & PRs" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", desc: "Primary IDE & debugging" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", desc: "API endpoint testing & validation" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", desc: "UI/UX mockup prototyping" },
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
                        className={`interactive-hover px-3 py-2 rounded-xl border font-mono-tech text-xs text-left transition-all active:scale-95 flex flex-col gap-2 ${
                          activeSkill === skill.name
                            ? "bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                            : "bg-accent/5 border-accent/20 text-foreground hover:text-accent hover:border-accent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 font-medium">
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-4 h-4 object-contain brightness-90 hover:brightness-100 transition-all"
                            onError={(e) => {
                              // Fallback simple indicator if image fails to load
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                          {skill.name}
                        </div>
                        {activeSkill === skill.name && (
                          <span className="text-[10px] text-accent/90 font-sans tracking-normal pl-0">
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
