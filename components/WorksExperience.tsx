'use client';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Software Engineer, Backend Developer',
    company: 'NAVER Cloud',
    period: 'June 2023 - Present',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
        <li>
          Designed and developed the OpenAPI for NaverWorks Task service, enabling third-party developer integrations.
        </li>
        <li>Led the development of a Kafka-based notification system, improving the reliability of the NaverWorks Task service.
        </li>
        <li>Enhanced system resilience by implementing Circuit Breaker for fault-tolerant service behaviour.
        </li>
        <li>
        Developed email and message notification using Spring Boot and Java for the Multilingual Management System.
        </li>
      </ul>
    ),
  },
  {
    role: 'Software Engineer, Backend Developer',
    company: 'WorksMobile',
    period: 'Sep 2021 - May 2023',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
        <li>Contributed to develop of the service’s centralised logging system for better observability.</li>
        <li>Led migration of the legacy Multilingual Management System from Python based architecture to Java and React based stack.</li>
      </ul>
    )
  },
  {
    role: 'Software Engineer, Intern',
    company: 'WorksMobile',
    period: 'July 2021 - Aug 2021',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
         <li>Built a full-stack web application using Java, Spring Boot, MySQL and Vue.js.</li>
        <li>Achieved 94% unit test coverage using Unit to ensure high code quality.</li>
        <li>
          Designed and documented RESTful APIs using Swagger.
        </li>
      </ul>
    )
  },
  {
    role: 'Software Engineer',
    company: 'SHINSEGAE I&C',
    period: 'Jan 2020 - June 2021',
    location: 'Seoul, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
         <li>
            Maintained and managed the E-mart Information Analysis System, handling large-scale product and sales data.
          </li>
          <li>
            Created and optimised SQL queries based on business requirements.
          </li>
          <li>
            Automated data validation process using Python, improving operational efficiency.
          </li>
          <li>
            Developed and executed complex data processing logic using MySQL and MyBatis.
          </li>
      </ul>
    )
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          </div>
        </motion.div>
        <motion.div
          className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.map((exp, index) => (
            <motion.div key={index} className="relative mb-12 pl-10 md:pl-12" variants={itemVariants}>
              <div className="absolute left-[-9px] top-1 h-4 w-4 bg-primary rounded-full ring-8 ring-background" />
              <div className="absolute left-[-19px] top-[-3px] bg-secondary p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
              <div className="text-foreground/80 mt-2">{exp.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
