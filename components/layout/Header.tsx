// components/layout/Header.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { siteConfig } from '@/config/site';

export default function Header() {
  const { darkMode, setDarkMode, isLoaded } = useTheme();
  const scrollTo = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollTo(sectionId);
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

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
        <div className="flex items-center space-x-4">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, 'skills')}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
          {renderThemeToggle()}
        </div>
      </nav>
    </header>
  );
}
