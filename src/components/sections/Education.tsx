"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Information Science & Engineering",
      institution: "Sahyadri College of Engineering and Management",
      period: "2023–2027"
    }
  ];

  return (
    <section id="education" className="w-full py-32 bg-background border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">Education</h2>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 mb-2">
                  <h3 className="text-2xl font-semibold text-foreground tracking-tight">{item.degree}</h3>
                  <span className="text-foreground-secondary font-medium">{item.period}</span>
                </div>
                {item.field && <p className="text-lg text-foreground-secondary mb-2">{item.field}</p>}
                <p className="text-lg text-foreground font-medium">{item.institution}</p>

                {index !== education.length - 1 && (
                  <hr className="mt-12 border-border-color/50" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
