'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { log } from 'console';

const experienceData = [
  {
    logo: '/navercloud.jpeg',
    role: 'Backend Developer, Full-time',
    company: 'NAVER Cloud',
    period: 'Jun 2023 - Present',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
        <li>
          Developed OpenAPI for external developers, enabling scalable integration and extending platform functionality
        </li>
        <li>
          Migrated a legacy notification system to a Kafka-based asynchronous pipeline, improving system reliability
        </li>
        <li>
          Implemented a batch-based deletion pipeline for cloud storage, replacing synchronous API calls
        </li>
        <li>
        Automated the code review workflow using Github Actions, n8n and on-premise LLM models, reducing
        average review time by 50% and boosting review productivity
        </li>
      </ul>
    ),
  },
  {
    logo: '/naverworks.png',
    role: 'Backend Developer, Full-time',
    company: 'WorksMobile',
    period: 'Sep 2021 - May 2023',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
        <li>
          Automated the end-to-end translation management workflow by integrating an internal multilingual system with
          external translation services, reducing the overall processing time by over 70%
        </li>
        <li>
          Built a Kafka-based admin audit logging pipeline to ensure reliable logging and scalable analytics
        </li>
        <li>
        Led a 6-member team to migrate an internal multilingual management system from Python-based architecture to
        Java and React-based stack, reducing project lead time by 80% and eliminating communication overhead
        </li>
      </ul>
    )
  },
  {
    logo: '/naverworks.png',
    role: 'Full-stack developer, Intern',
    company: 'WorksMobile',
    period: 'July 2021 - Aug 2021',
    location: 'Gyeonggi-do, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
         <li> Developed a full-stack project management web service using Java, Spring Boot, MySQL, and Vue.js</li>
        <li>Achieved 94% test code coverage and integrated SonarQube to enforce clean code standards</li>
        <li>
        Designed RESTful APIs for the service and standardised API documentation using Swagger
        </li>
      </ul>
    )
  },
  {
    logo: '/shinsegae.png',
    role: 'Software Engineer, Full-time',
    company: 'SHINSEGAE I&C',
    period: 'Jan 2020 - Jun 2021',
    location: 'Seoul, South Korea',
    description: (
      <ul className="mt-2 list-disc list-inside space-y-1">
          <li>
          Automated the product data validation using Python, reducing processing time by 50% across 100K+ SKUs
          </li>
          <li>
          Built MySQL-based sales data workflows and BI dashboards to support faster, data-driven business decisions
          </li>
          <li>
            Maintained and managed the E-mart Information Analysis System, handling large-scale product and sales data.
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
            <motion.div key={index} className="relative mb-12 pl-14" variants={itemVariants}>
              <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
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
