// components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Github />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
