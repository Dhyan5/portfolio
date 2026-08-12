"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      period: "2023 — 2027",
      degree: "B.E. in Information Science and Engineering",
      institution: "Sahyadri College of Engineering and Management",
      location: "Mangaluru, India",
      details: "Focusing on Python systems, computer vision pipelines, OS resource management, data structures, and web technologies.",
      current: true,
    },
    {
      period: "2021 — 2023",
      degree: "Pre-University Education (PCMC)",
      institution: "Vidyodaya PU College",
      location: "Udupi, India",
      details: "Completed Pre-University studies with focus on Physics, Chemistry, Mathematics, and Computer Science.",
      current: false,
    },
    {
      period: "2009 — 2020",
      degree: "Primary & Secondary Schooling",
      institution: "Little Rock Indian School",
      location: "Brahmavar, India",
      details: "Foundational education with emphasis on analytical problem-solving and academic excellence.",
      current: false,
    },
  ];

  return (
    <section id="education" className="w-full py-28 relative border-t border-border-color">
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
            04 // ACADEMICS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Educational Background
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Academic progression from primary schooling to Information Science & Engineering degree.
          </p>
        </motion.div>

        {/* Education Timeline Grid with Scroll Reveal */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`interactive-hover glass-card rounded-2xl p-8 border ${
                edu.current ? "border-accent/40 bg-accent/5" : "border-white/10"
              } relative overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      {edu.degree}
                    </h3>
                  </div>
                  <h4 className="text-lg text-foreground-secondary font-medium">
                    {edu.institution}
                  </h4>
                </div>

                <div className="flex flex-col md:items-end text-sm font-mono-tech gap-1">
                  <div className="flex items-center gap-1.5 text-accent font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground-secondary/70">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground-secondary text-sm md:text-base leading-relaxed pt-2 border-t border-white/10">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
