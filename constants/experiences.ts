import type { Experience } from "@/types/experience";
import techlosetLogo from "@/public/assets/images/techloset-logo.png";
import mitLogo from "@/public/assets/images/mit-logo.png";

export const experiences: Experience[] = [
  {
    company: "Techloset",
    companyImage: techlosetLogo,
    role: "Full-Stack & Agentic AI Bootcamp, Onsite",
    period: "Nov 2025 — March 2026",
    description: "Completed intensive onsite bootcamp training and projects.",
    highlights: [
      "Delivered production-ready projects across web, mobile, and AI-focused tracks during the bootcamp.",
      "Built stronger full-stack execution across Next.js, MERN, React Native, and FastAPI by shipping complete product workflows end to end.",
      "Developed practical engineering judgment in architecture decisions, API integration, state management, and production deployment.",
    ],
  },
  {
    company: "MIT Programmer",
    companyImage: mitLogo,
    role: "Junior Developer, Onsite",
    period: "Jun 2025 — Sep 2025",
    description: "Contributed to client-facing full-stack applications.",
    highlights: [
      "Contributed to full-stack client projects using the MERN stack, building scalable and maintainable applications.",
      "Integrated REST APIs and managed end-to-end data flow between frontend and backend systems.",
      "Developed a CRM system with user management, data handling, and dashboard functionality.",
      "Collaborated in a team environment following clean architecture and production-level coding standard.",
    ],
  },
];
