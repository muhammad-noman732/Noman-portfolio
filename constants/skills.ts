export const skillCategories = {
  // "AI & LLM": ["Vercel AI SDK", "OpenAI API", "Prompt Engineering"],
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "Firebase",
  ],
  "Databases & Infra": [
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Supabase",
  ],
  Languages: [
    "JavaScript ",
    "TypeScript",
  ],
  Tools: ["Git", "GitHub", "Docker" ],
} as const;

export const skills = Object.values(skillCategories).flat();
