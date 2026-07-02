"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Dementia Support Companion",
      description: "A Flask-based web application built to support dementia patients and caregivers through an accessible interface and scalable backend.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hostel Management System",
      description: "A full-stack hostel management platform for student registration, room allocation, occupancy tracking, and hostel administration.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Database"],
      github: "https://github.com/Dhyan5/HMS",
      demo: null
    },
    {
      title: "VisionPing – Performance Monitor",
      description: "A lightweight Python application that monitors CPU, RAM, GPU, and network resources with efficient logging and diagnostics.",
      technologies: ["Python", "psutil"],
      github: "#",
      demo: null
    }
  ];

  return (
    <section id="projects" className="w-full py-32 bg-background border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-background-secondary rounded-[2rem] p-8 md:p-10 border border-border-color/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{project.title}</h3>
                <p className="text-foreground-secondary mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="text-xs font-medium text-foreground-secondary bg-border-color/30 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
