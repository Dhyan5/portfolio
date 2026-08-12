"use client";

import { motion } from "framer-motion";
import { Activity, Code2, Scale, ExternalLink, Sparkles } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      id: "hridyadarpan",
      year: "2026",
      title: "HridyaDarpan",
      subtitle: "AI Cardiovascular Health SaaS",
      category: "Healthcare AI & WebGL 3D",
      icon: Activity,
      description:
        "Engineered an enterprise cardiac SaaS platform featuring early cardiovascular risk prediction, interactive physiological modeling, and multi-agent clinical consultation workflows.",
      bullets: [
        "Early risk prediction via Framingham and ASCVD clinical risk models powered by XGBoost and LightGBM.",
        "Interactive 3D Digital Heart Twin developed with WebGL / Three.js for real-time patient physiological visualization.",
        "Multi-agent AI clinical consultation agentic workflows integrated with Google Maps Platform API for location-aware emergency care routing.",
      ],
      technologies: [
        "Python",
        "XGBoost",
        "LightGBM",
        "WebGL",
        "Three.js",
        "Multi-Agent AI",
        "Google Maps API",
      ],
      github: "https://github.com/Dhyan5",
      live: null,
      featured: true,
    },
    {
      id: "software-archaeologist",
      year: "2026",
      title: "Software Archaeologist",
      subtitle: "Enterprise Repository Analysis",
      category: "Codebase Intelligence & Static Analysis",
      icon: Code2,
      description:
        "Automated codebase analysis tool designed to inspect legacy, undocumented codebases through static AST symbol parsing, historical archaeology, and LLM explanation pipelines.",
      bullets: [
        "AST symbol parsing and static analysis to dissect complex multi-tier application architectures.",
        "Constructed dynamic dependency graphs and performed Git history archaeology to trace architectural evolution and commit authorship.",
        "Integrated evidence-grounded AI explanation pipelines to safely assist software teams in codebase modernization.",
      ],
      technologies: [
        "Python",
        "AST Parsing",
        "Git Archaeology",
        "Dependency Graphs",
        "AI Pipelines",
        "Static Analysis",
      ],
      github: "https://github.com/Dhyan5",
      live: null,
      featured: false,
    },
    {
      id: "vakeel-ai",
      year: "2025",
      title: "VakeelAI",
      subtitle: "Legal Tech & Knowledge Assistant",
      category: "NLP & Citizen Empowerment",
      icon: Scale,
      description:
        "Virtual legal intelligence platform architected to democratize access to legal statutes, citizen rights, and legal documentation in India.",
      bullets: [
        "Plain-English natural language search workflows for querying the Indian Penal Code (Bharatiya Nyaya Sanhita) and constitutional rights.",
        "Automated legal document summaries and case guidance workflows tailored for non-technical user bases.",
        "Accelerates legal literacy and statutory comprehension through context-aware AI retrieval.",
      ],
      technologies: [
        "Python",
        "NLP",
        "Flask",
        "REST APIs",
        "Legal Knowledge Graphs",
        "Responsive UI",
      ],
      github: "https://github.com/Dhyan5",
      live: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block font-semibold">
            02 // FEATURED WORK
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Project Experience
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Architecting intelligent systems from machine learning platforms to 3D graphics engines and static code analysis pipelines.
          </p>
        </motion.div>

        {/* Projects Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 gap-12 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="interactive-hover glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-accent/15 hover:border-accent/50"
            >
              {/* Highlight Glow for Featured Project */}
              {project.featured && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-accent/10 border-b border-l border-accent/30 rounded-bl-2xl font-mono-tech text-xs text-accent flex items-center gap-1.5 font-semibold shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                  <Sparkles className="w-3.5 h-3.5" /> FEATURED SYSTEM
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
                {/* Left Header Column */}
                <div className="lg:w-1/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                        <project.icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-tech text-xs text-accent font-semibold tracking-wider">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="interactive-hover text-3xl md:text-4xl font-extrabold text-foreground mb-1 tracking-tight">
                      {project.title}
                    </h3>
                    <h4 className="text-lg font-mono-tech text-foreground-secondary mb-4">
                      {project.subtitle}
                    </h4>
                    <span className="inline-block text-xs font-mono-tech text-foreground-secondary/70 uppercase tracking-widest mb-6">
                      // {project.category}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-4 font-mono-tech text-xs">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-hover px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center gap-2 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" /> Code Repository
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-hover px-5 py-2.5 rounded-full bg-accent text-[#000000] font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Bullet Details Column */}
                <div className="lg:w-2/3 flex flex-col justify-between">
                  <p className="text-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3 text-foreground-secondary text-sm md:text-base leading-relaxed">
                        <span className="text-accent font-mono-tech mt-1">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-md bg-accent/5 border border-accent/20 font-mono-tech text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
