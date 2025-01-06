export const siteConfig = {
  name: process.env.NEXT_PUBLIC_FULL_NAME || 'Samuel Wielgat',
  jobTitle:
    process.env.NEXT_PUBLIC_JOB_TITLE || 'Next.js Wizard & React Enthusiast',
  email: process.env.NEXT_PUBLIC_EMAIL || 'samuelwielgat@gmail.com',
  social: {
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/samuelwielgat',
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://linkedin.com/in/samuel-wielgat',
  },
};
