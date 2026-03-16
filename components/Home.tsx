'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { SiTistory } from "react-icons/si";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center bg-[#f0ede8] dark:bg-zinc-950 px-8 lg:px-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-[#3a6b4a] uppercase mb-5">
            Backend Developer
          </p>
          <h1 className="text-7xl lg:text-8xl font-black leading-[1.05] mb-6 text-gray-900 dark:text-white">
            Hyeri<br />
            <span className="text-[#3a6b4a]">Jung.</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-md">
          Backend engineer with 5+ years of experience building scalable web services with Java/Kotlin and Spring Boot, based in Korea.
       
          </p>
          <div className="flex gap-4 flex-wrap space-x-6 mt-12">
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
        </motion.div>

        {/* Right — Circle profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Large circle outline */}
          <div className="relative w-[420px] h-[620px] rounded-full border-2  overflow-hidden">
            <video
              src="/hyeri-grok.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          {/* Small decorative filled circle */}
          <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-[#3a6b4a]/30" />
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#e5e0d9] dark:bg-zinc-900 rounded-2xl p-8 lg:p-10"
        >
          <div className="divide-y divide-gray-300 dark:divide-zinc-700">
            <div className="flex items-center gap-8 pb-7">
              <span className="text-6xl font-black text-gray-900 dark:text-white w-24 shrink-0">
                5<sup className="text-2xl font-bold text-[#3a6b4a]">+</sup>
              </span>
              <p className="text-gray-500 dark:text-gray-400 leading-snug">
                Years of backend development experience
              </p>
            </div>
            <div className="flex items-center gap-8 py-7">
              <span className="text-6xl font-black text-gray-900 dark:text-white w-24 shrink-0">
                4
              </span>
              <p className="text-gray-500 dark:text-gray-400 leading-snug">
                Companies — Naver Cloud, WorksMobile, Shinsegae...
              </p>
            </div>
            <div className="flex items-center gap-8 pt-7">
              <span className="text-6xl font-black text-gray-900 dark:text-white w-24 shrink-0">
                3
              </span>
              <p className="text-gray-500 dark:text-gray-400 leading-snug">
                Live side projects shipped & deployed
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
