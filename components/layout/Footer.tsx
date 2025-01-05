// components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Samuel Wielgat. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/samuelwielgat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/samuelwielgat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:samuelwielgat@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
