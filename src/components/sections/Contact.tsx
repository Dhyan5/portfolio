"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 bg-background border-t border-border-color/30">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24"
        >
          <div className="flex-1 flex flex-col">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">Let's Connect.</h2>
            <p className="text-xl text-foreground-secondary mb-12 max-w-md leading-relaxed">
              I'm always open to discussing internships, collaborations, and new opportunities.
            </p>
            
            <div className="space-y-6 text-lg font-medium">
              <div>
                <p className="text-foreground-secondary mb-1 text-sm">Email</p>
                <a href="mailto:dhyanshetty7@gmail.com" className="text-foreground hover:text-accent transition-colors">dhyanshetty7@gmail.com</a>
              </div>
              <div>
                <p className="text-foreground-secondary mb-1 text-sm">Phone</p>
                <a href="tel:+917619101182" className="text-foreground hover:text-accent transition-colors">+91 7619101182</a>
              </div>
              <div>
                <p className="text-foreground-secondary mb-1 text-sm">GitHub</p>
                <a href="https://github.com/Dhyan5" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">github.com/Dhyan5</a>
              </div>
              <div>
                <p className="text-foreground-secondary mb-1 text-sm">LinkedIn</p>
                <a href="https://linkedin.com/in/dhyan-shetty5" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">linkedin.com/in/dhyan-shetty5</a>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background-secondary border border-border-color/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background-secondary border border-border-color/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground-secondary">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-background-secondary border border-border-color/50 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                  placeholder="Hello Dhyan..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto mt-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-[1.02] transition-transform flex items-center justify-center self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
