'use client';
import { aosProps } from "utils/aosConfig";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#ece7e1] dark:bg-black transition-colors">
      <div className="w-full md:w-[50%] md:ml-[15%] flex-shrink-0 flex flex-col px-4 md:px-20 justify-center gap-5">
        <div>
          <h2 {...aosProps} className="mt-10 font-playfairsc text-6xl md:text-[7vw] font-light leading-[1em] text-gray-900 dark:text-white">
            Hyeri
          </h2>
        </div>
        <div className="font-dmserif mt-5 text-2xl md:text-[2vw] font-light leading-[1em] text-gray-900 dark:text-white">
          I'm Hyeri-Jung. A software engineer, web developer and problem solver.
        </div>
       
        <div className="font-montserrat mt-5 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
          Backend developer with 4+ years of experience building and scaling web server using Java and Kotlin. 
          Skilled in B2B services, distributed systems, and building maintainable architectures. 
          Strong communicator who bridges the gap between technical and non-technical stakeholders.
        </div>

        <div>
          <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Skills
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { label: 'Language',   skills: ['Java', 'Kotlin', 'JavaScript'] },
              { label: 'Framework',  skills: ['Spring Boot', 'React', 'Kafka'] },
              { label: 'Database',   skills: ['MySQL', 'MongoDB'] },
              { label: 'Tools',      skills: ['Git', 'Swagger', 'REST API', 'TDD', 'n8n'] },
            ].map(({ label, skills }) => (
              <div key={label} className="flex items-start gap-6">
                <span className="font-montserrat text-[12px] text-gray-800 dark:text-gray-500 uppercase tracking-widest w-20 shrink-0 pt-1">
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-montserrat text-[13px] px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Education
          </div>
          <div className="font-montserrat mt-3 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            B.S. in Computer Science, Kookmin University <br />
            Seoul, South Korea
          </div>
        </div>
        <div className="mt-5 mb-10 md:mb-20">
          <button
            rel="noopener noreferrer"
            className="px-6 py-3 font-montserrat bg-black dark:bg-white text-white dark:text-black rounded-full hover:px-10 transition-all duration-300 ease-in-out"
          >
            <a href="#contact">Contact me</a>
          </button>
           {/* <div className="font-dmserif mt-5 text-2xl font-light leading-[1em] text-gray-900 dark:text-white">
            Contact me
          </div> */}
          {/* <div className="font-montserrat mt-3 text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            Email: hyerijung0903@gmail.com <br/>
            <a href="https://www.linkedin.com/in/hyerijung/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>LinkedIn</span>
            </a> / <a href="https://github.com/hyeri0903" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>GitHub</span>
            </a> / <a href="https://hyeri0903.tistory.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              <span>Tech Blog</span>
            </a>
          </div> */}
          
        </div>
      </div>
    </section> 
  );
}
