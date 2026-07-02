"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      name: "Programming",
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      name: "Backend",
      skills: ["Flask", "REST APIs"]
    },
    {
      name: "AI",
      skills: ["OpenCV", "MediaPipe"]
    },
    {
      name: "Systems",
      skills: ["Linux", "Performance Monitoring", "Resource Analysis"]
    },
    {
      name: "DevOps",
      skills: ["Docker", "GitHub Actions", "AWS EC2", "AWS S3"]
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"]
    }
  ];

  return (
    <section id="skills" className="w-full py-32 bg-background-secondary border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-6 tracking-tight">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex} 
                      className="px-5 py-2.5 bg-background text-foreground-secondary border border-border-color/50 rounded-full text-sm font-medium hover:text-foreground hover:border-foreground/30 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
