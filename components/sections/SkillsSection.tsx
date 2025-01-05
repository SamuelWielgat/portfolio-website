// components/sections/SkillsSection.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGithubactions,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillCategories = {
  Frontend: [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'REST APIs', icon: TbApi },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS', icon: SiAmazon },
    { name: 'CI/CD', icon: SiGithubactions },
  ],
};

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Technical Arsenal
        </motion.h2>

        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      <span>{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
