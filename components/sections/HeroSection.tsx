// components/sections/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { siteConfig } from '@/config/site';

const floatingCodeSnippets = [
  'const developer = new FullStackDev();',
  'await developer.solve(complexProblem);',
  '<NextJS>Magic</NextJS>',
  'git commit -m "Fixed bugs"',
  'npm run deploy-to-prod',
];

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    // Set dimensions once mounted
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Optional: Update dimensions on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      {/* Matrix-like grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-blue-400/20" />
        ))}
      </div>

      {/* Floating code snippets */}
      {dimensions.width > 0 &&
        floatingCodeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-sm text-blue-300/60 font-mono"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              transition: {
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
              },
            }}
          >
            {snippet}
          </motion.div>
        ))}

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            <TypeAnimation
              sequence={[
                `Hi, I'm ${siteConfig.name}`,
                1000,
                'I Build Web Applications',
                1000,
                'I Create User Experiences',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="text-xl font-mono bg-black/20 p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                '> const skills = ["Next.js", "React", "TypeScript"];',
                1000,
                '> console.log("Let\'s build something amazing!");',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => scrollTo('about')}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold 
                hover:bg-blue-700 transition-all duration-300 ease-in-out
                hover:transform hover:scale-105"
            >
              Explore My Work
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
