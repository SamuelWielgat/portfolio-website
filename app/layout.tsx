// app/layout.tsx
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.css';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${siteConfig.name} - Portfolio`,
  description: 'Full-stack developer specializing in Next.js and React',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
