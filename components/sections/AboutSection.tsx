// components/sections/AboutSection.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const aboutContent = {
  paragraphs: [
    "I'm a Full-Stack Developer specializing in modern web technologies, with particular expertise in Next.js, React, and TypeScript. My journey in web development is driven by a passion for creating elegant, efficient, and user-centric solutions.",
    "With a strong foundation in both frontend and backend development, I bring a comprehensive approach to web development. My experience ranges from building responsive websites with Next.js and React to developing robust backend services with Java and Spring Boot. I've achieved notable results, including a 90% job placement rate as a Computer Science Instructor and significant performance improvements in my backend development work.",
    "Beyond coding, I'm an educator at heart, having prepared students for Junior Full-Stack Developer roles. I believe in the power of knowledge sharing and continuous learning in the ever-evolving tech landscape. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or helping others grow in their development journey.",
  ],
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>);

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/me.png"
              alt="Samuel Wielgat"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg mb-4 text-gray-700 dark:text-gray-300"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
