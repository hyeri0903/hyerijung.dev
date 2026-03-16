"use client";

import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";
import { SiTistory } from "react-icons/si";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 lg:py-32 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
        {/* <h2 className="text-3xl md:text-4xl font-bold">Contact</h2> */}
        <p className="text-xs font-bold tracking-[0.2em] text-[#3a6b4a] uppercase mb-5">
            Contact
        </p>
        <p className="text-xl text-muted-foreground mt-2 mb-8 max-w-2xl mx-auto">
          <span className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-10">
            Let's work <span className="text-[#3a6b4a]">together!</span>
          </span> <br />
          <span className="block mt-6">
            I'm always open to new opportunities and collaborations.
          </span>
          
        </p>
        <button
          rel="noopener noreferrer"
          className="px-6 py-3 font-montserrat bg-black dark:bg-white text-white dark:text-black rounded-full hover:px-10 transition-all duration-300 ease-in-out"
        >
          <a href="mailto:hyerijung0903@gmail.com" className="flex items-center">
            <Send className="mr-2 h-5 w-5" /> Send Email
          </a>
        </button>
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://github.com/hyeri0903"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/hyerijung/"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://hyeri0903.tistory.com/"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <SiTistory size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
