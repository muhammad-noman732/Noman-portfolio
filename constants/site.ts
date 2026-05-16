import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Muhammad Noman",
  fullName: "Muhammad Noman",
  title:
    "Muhammad Noman — Full-Stack Developer  | Software Engineer Portfolio",
  description:
    "Muhammad Noman is a full-stack developer specializing in Next.js, React, React Native. Explore projects, skills, and experience. Based in Lahore, Pakistan.",
  url: "https://nomandev.dev",
  ogImage: "/assets/logos/logo-dark.png",
  email: "noman.dev200@gmail.com",
  jobTitle: "Full-Stack Developer ",
  location: "Lahore, Pakistan",
  keywords: [
    "Muhammad Noman",
    "Noman",
    "Noman Developer",
    "nomandev",
    "SDE",
    "software engineer",
    "software developer",
    "full stack developer",
    "full-stack developer",
    "AI developer",
    "AI engineer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "MERN stack developer",
    "TypeScript developer",
    "Python developer",
    "LangChain developer",
    "agentic AI",
    "portfolio",
    "developer portfolio",
    "software engineer portfolio",
    "Pakistan developer",
    "Lahore developer",
    "Faisalabad developer",
    "freelance developer Pakistan",
  ],
  socialProfiles: {
    github: "https://github.com/muhammad-noman732",
    linkedin: "https://www.linkedin.com/in/muhammad-noman-b6284830b/",
    email: "mailto:noman.dev200@gmail.com",
  },
  // Add your Google Search Console verification code here
  googleVerification: "",
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/muhammad-noman732" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-noman-b6284830b/",
  },
  { name: "Email", url: "mailto:noman.dev200@gmail.com" },
];
