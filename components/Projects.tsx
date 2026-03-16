'use client';

import { motion } from 'framer-motion';

const projectData = [
  {
    thumbnail: '/bloomdiary.png',
    title: 'Bloom English Diary',
    description:
      'AI-powered English diary with CEFR-level grammar & vocabulary feedback. Built with React, Tailwind, Claude API.',
    demo: 'https://bloom-english-diary.vercel.app',
    code: 'https://github.com/hyeri0903/bloom-diary',
  },
  {
    thumbnail: '/pink.png',
    title: 'Party Card',
    description:
      'Mobile invitation web app for special occasions. Built with Next.js and Tailwind CSS.',
    demo: 'https://mobile-invitation-rouge.vercel.app/',
    code: 'https://github.com/hyeri0903/mobile-invitation',
  },
  {
    thumbnail: '/mobile-wedding-thumbnail.png',
    title: 'Wedding Invitation',
    description:
      'Mobile wedding invitation app. Built with React, Tailwind CSS, and deployed on Cloudflare Workers.',
    demo: 'https://forever-love-invitation.hazystudio.workers.dev/',
    code: 'https://github.com/hyeri0903/forever-love-invitation',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#ffffff] dark:bg-zinc-950">
      <div className="container mx-auto px-8 lg:px-20 max-w-6xl">
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
       
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Thumbnail */}
              <div className="rounded-xl h-44 overflow-hidden mb-6">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#2d5a3d] text-white text-sm font-semibold rounded-full hover:bg-[#1e4230] transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-full hover:border-gray-700 hover:text-gray-900 dark:hover:border-white dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
