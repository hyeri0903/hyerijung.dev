'use client';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Backend Developer, Full-time',
    company: 'NAVER Cloud',
    period: 'Jun 2023 – Present',
    description:
      'Developed OpenAPI for external developers. Migrated legacy notification system to Kafka-based async pipeline. Automated code review workflow using LLM models — reducing review time by 50%.',
  },
  {
    role: 'Backend Developer, Full-time',
    company: 'WorksMobile',
    period: 'Sep 2021 – May 2023',
    description:
      'Led 6-member team migrating multilingual system from Python to Java/React — reducing project lead time by 80%. Built Kafka-based admin audit logging pipeline.',
  },
  {
    role: 'Full-stack Developer, Intern',
    company: 'WorksMobile',
    period: 'Jul 2021 – Aug 2021',
    description:
      'Developed a full-stack project management web service using Java, Spring Boot, MySQL, and Vue.js. Achieved 94% test code coverage and integrated SonarQube.',
  },
  {
    role: 'Software Engineer, Full-time',
    company: 'Shinsegae I&C',
    period: 'Jan 2020 – Jun 2021',
    description:
      'Automated product data validation across 100K+ SKUs — reducing processing time by 50%. Built MySQL-based sales data workflows and BI dashboards.',
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 lg:py-32 bg-[#f0ede8] dark:bg-zinc-950">
      <div className="container mx-auto px-8 lg:px-20 max-w-5xl">
        <motion.h2
          className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-[1fr] sm:grid-cols-[160px_32px_1fr] gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Mobile: stacked layout / Desktop: hidden (replaced by left column) */}
              <div className="sm:hidden flex items-start gap-4 pb-10">
                {/* dot + line */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#3a6b4a] shrink-0 z-10" />
                  {index < experienceData.length - 1 && (
                    <div className="w-px flex-1 bg-gray-300 dark:bg-zinc-700 mt-1 min-h-[80px]" />
                  )}
                </div>
                {/* content */}
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-white text-base">{exp.company}</p>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mt-0.5">{exp.role}</h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{exp.period}</p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Desktop: Left column - company + date */}
              <div className="hidden sm:block text-right pt-0.5 pb-12">
                <p className="font-bold text-gray-900 dark:text-white text-base">{exp.company}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{exp.period}</p>
              </div>

              {/* Desktop: Middle - dot + line */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#3a6b4a] mt-1 shrink-0 z-10" />
                {index < experienceData.length - 1 && (
                  <div className="w-px flex-1 bg-gray-300 dark:bg-zinc-700 mt-1" />
                )}
              </div>

              {/* Desktop: Right - role + description */}
              <div className="hidden sm:block pb-12">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{exp.role}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 leading-relaxed text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
