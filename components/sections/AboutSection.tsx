// components/sections/AboutSection.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

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
            <p className="text-lg mb-4">
              I'm a passionate full-stack developer with a knack for creating
              elegant, efficient, and user-centric web applications. My
              expertise lies in the Next.js framework and the broader React
              ecosystem, where I blend cutting-edge technology with creative
              problem-solving.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in JavaScript and a keen eye for design,
              I strive to build seamless experiences that not only meet but
              exceed user expectations. I'm constantly pushing the boundaries of
              what's possible in web development, always eager to learn and
              implement new technologies.
            </p>
            <p className="text-lg">
              When I'm not immersed in code, you can find me contributing to
              open-source projects, writing technical blog posts, or mentoring
              aspiring developers. I believe in the power of community and
              continuous learning in the ever-evolving world of tech.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
