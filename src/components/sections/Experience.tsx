"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Team Leader",
      organization: "ISDC (Innovex Student Developer Community)",
      period: "2025 — Present",
      location: "Sahyadri College, Mangaluru",
      badge: "LEADERSHIP & ENGINEERING",
      highlights: [
        "Leading a team of 15 engineering students in architecting and deploying production full-stack web applications for community and institutional projects.",
        "Directing technical visual identity and graphics rendering, gaining hands-on practical experience in 3D graphic rendering (Three.js, OpenGL) and decentralized web integrations (Web3.js).",
        "Enforcing modern Git workflows, code reviews, and modular component patterns across team deliverables.",
      ],
      technologies: ["Web3.js", "OpenGL", "Three.js", "Full-Stack Dev", "Team Leadership", "Git"],
    },
    {
      role: "Core Member",
      organization: "ISDC (Innovex Student Developer Community)",
      period: "2024 — Present",
      location: "Sahyadri College, Mangaluru",
      badge: "ORGANISATION & COMMUNITY",
      highlights: [
        "Active core member of the community since its inception, contributing directly to technical leadership, event planning, and organizational growth.",
        "Organized and conducted technical workshops and hands-on developer sessions focused on Git version control, GitHub workflows, and web deployment strategies.",
        "Mentored junior undergraduates in web engineering fundamentals and open-source contributions.",
      ],
      technologies: ["Git & GitHub", "Web Deployment", "Community Leadership", "Technical Workshops"],
    },
  ];

  return (
    <section id="experience" className="w-full py-28 relative border-t border-border-color">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-accent mb-2 block font-semibold">
            03 // LEADERSHIP & INVOLVEMENT
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Organisation & Leadership
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Driving technical workshops, leading developer teams, and building high-impact community applications.
          </p>
        </motion.div>

        {/* Experience Timeline Cards with Scroll Reveal */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="interactive-hover glass-card rounded-2xl p-8 md:p-10 border border-accent/15 relative overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono-tech text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-3 inline-block font-semibold">
                    {exp.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-mono-tech text-foreground-secondary font-medium">
                    {exp.organization}
                  </h4>
                </div>

                <div className="flex flex-col md:items-end text-sm font-mono-tech text-foreground-secondary gap-1">
                  <div className="flex items-center gap-1.5 text-accent font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground-secondary/70">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8">
                {exp.highlights.map((item, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-foreground-secondary text-sm md:text-base leading-relaxed">
                    <span className="text-accent font-mono-tech mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {exp.technologies.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono-tech text-xs text-foreground-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
