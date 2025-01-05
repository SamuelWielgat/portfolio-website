// components/layout/Header.tsx
'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Samuel Wielgat</h1>
        <div className="flex items-center space-x-4">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
