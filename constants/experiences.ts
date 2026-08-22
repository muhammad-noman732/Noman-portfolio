import type { Experience } from "@/types/experience";
import techlosetLogo from "@/public/assets/images/techloset-logo.png";
import mitLogo from "@/public/assets/images/mit-logo.png";

export const experiences: Experience[] = [
  {
    company: "Techloset Solution",
    companyImage: techlosetLogo,
    role: "Full Stack Engineer",
    period: "11/2025 – 04/2026",
    description: "Built production-ready full-stack applications across web and AI-driven product work.",
    location: "Onsite",
    techStack: ["Next.js", "MongoDB", "Docker", "Tailwind CSS"],
    highlights: [
      "Designed and implemented REST APIs, relational database schemas, and Redux Toolkit state management for Next.js and MERN stack applications, improving consistency across client-facing modules.",
      "Containerized and deployed applications with Docker on AWS EC2, while enforcing structured code reviews that reduced regressions before production releases.",
      "Integrated third-party services including Stripe payment flows and WebSocket connections to deliver real-time features and secure payment processing across client products.",
    ],
  },
  {
    company: "MIT Programmer",
    companyImage: mitLogo,
    role: "MERN Stack Developer",
    period: "05/2025 – 09/2025",
    description: "Owned end-to-end development of client-facing full-stack features and product workflows.",
    location: "Onsite",
    techStack: ["Node.js", "Express.js", "MongoDB", "React"],
    highlights: [
      "Owned end-to-end development of a CRM platform with role-based access control across Admin, Manager, and Agent tiers, dynamic filterable tables, and real-time analytics dashboards using Node.js, Express.js, and React.",
      "Identified and resolved performance bottlenecks in React component trees on data-heavy views, reducing unnecessary re-renders and improving dashboard responsiveness.",
      "Collaborated on API design and MongoDB schema decisions, keeping the data layer consistent as the product evolved and new features were added.",
    ],
  },
];
