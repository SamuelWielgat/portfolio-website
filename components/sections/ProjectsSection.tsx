// components/sections/ProjectsSection.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { Project } from '@/types/project';

const defaultImage = '/images/project-placeholder.jpeg';

const projects: Project[] = [
  {
    title: 'NextCommerce',
    description:
      'A full-featured e-commerce platform built with Next.js, featuring server-side rendering, API routes, and seamless checkout process.',
    image: defaultImage,
    link: 'https://nextcommerce.example.com',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'DevDash',
    description:
      'A real-time developer dashboard built with React and Socket.io, providing live updates on project status, team productivity, and code quality metrics.',
    image: defaultImage,
    link: 'https://devdash.example.com',
    technologies: ['React', 'Socket.io', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'AI Code Reviewer',
    description:
      'An AI-powered code review tool that integrates with GitHub, providing automated code suggestions and best practices using natural language processing.',
    image: defaultImage,
    link: 'https://aicodereview.example.com',
    technologies: ['React', 'Socket.io', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm bg-blue-600/80 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
