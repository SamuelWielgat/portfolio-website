// components/layout/Header.tsx
'use client';

import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { darkMode, setDarkMode, isLoaded } = useTheme();
  const scrollTo = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    // Close mobile menu first
    setIsMenuOpen(false);

    // Small delay to ensure menu closing animation doesn't interfere with scroll
    setTimeout(() => {
      scrollTo(sectionId);
    }, 100);
  };

  // Add a safe render for the theme toggle button
  const renderThemeToggle = () => {
    if (!isLoaded) {
      return (
        <button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          aria-label="Loading theme toggle"
        >
          <Moon size={20} />
        </button>
      );
    }

    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    );
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{siteConfig.name}</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.slice(1))}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            {renderThemeToggle()}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            {renderThemeToggle()}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.slice(1))}
                    className="hover:text-blue-600 transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
