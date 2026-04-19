import type { Project } from "@/types/project";
import chatwaveImg from "@/public/assets/images/chatwave.png";
import chatappImg from "@/public/assets/images/chatapp.png";
import medicareImg from "@/public/assets/images/medicare.png";
import foodmanImg from "@/public/assets/images/foodman.png";
import logoaiImg from "@/public/assets/images/logo-ai.png";
import meditrackImg from "@/public/assets/images/meditrack.png";
import storeitImg from "@/public/assets/images/store-it.png";
import engageFlowImg from "@/public/assets/images/engageFlow.png";
import compsProImg from "@/public/assets/images/compsPro.png";
import astraBotImg from "@/public/assets/images/astrabot.png";
import weatherImg from "@/public/assets/images/weather.png";
import midnightFusionImg from "@/public/assets/images/midnightFusion.jpeg";
import therapyCloneImg from "@/public/assets/images/therapyClone.png.png";
export const projects: Project[] = [
  {
    slug: "medicare-dashboard",
    title: "Medicare Dashboard",
    description:
      "A healthcare management platform for practitioners to streamline patient records, scheduling, and clinical analytics through a high-performance, secure dashboard.",
    image: medicareImg,
    liveUrl: "https://medicare-dashboard-gilt.vercel.app/",
    githubUrl: "https://github.com/muhammad-noman732/Bootcamp-MedicareDashboard",
    technologies: [
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
      { name: "Prisma", icon: "/assets/icons/prisma.svg" },
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Redux", icon: "/assets/icons/redux.svg" },
      { name: "Cloudinary", icon: "/assets/icons/cloudinary.png" },
    ],
    features: [
      "Conflict-Free Scheduling: Real-time appointment engine with automated slot validation and instant notifications.",
      "Data-Driven Insights: Live analytics dashboard tracking patient recovery and surgical queues via Recharts.",
      "Secure Auth Lifecycle: Dual-token JWT system with Google OAuth and SendGrid OTP verification.",
      "Health Record Engine: Secure patient management system with cloud-integrated medical media uploads.",
    ],
    featured: true,
  },

  {
    slug: "chatwave",
    title: "ChatWave",
    description:
      "A real-time, cross-platform messaging app built with React Native and Expo, featuring private/group chats, live sync via Firebase, and robust state management with Redux Toolkit.",
    image: chatwaveImg,

    githubUrl: "https://github.com/muhammad-noman732/Bootcamp-ChatWave",
    technologies: [
      { name: "React Native", icon: "/assets/icons/expo.svg" },
      { name: "Expo", icon: "/assets/icons/expo.svg" },
      { name: "Firebase", icon: "/assets/icons/firebase.svg" },
      { name: "Redux Toolkit", icon: "/assets/icons/redux.svg" },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "JavaScript", icon: "/assets/icons/js.svg" },
    ],
    features: [
      "Real-time messaging with instant delivery and live typing indicators",
      "Group chat management with creation and member controls",
      "Multi-media sharing for images, videos, and documents",
      "Social authentication via Google, Facebook, and Email",
      "Interactive polls for group engagement",
      "Redux Toolkit state management for chat and auth flows",
    ],
    isApp: true,
    featured: true,
  },
  {
    slug: "mycomps-ai",
    title: "MyComps.ai",
    description:
      "An intelligent real estate agent that automates property comparable analysis and valuation by processing Zillow market data for ARV estimates, repair logic, and investor-ready reports.",
    image: compsProImg,
    liveUrl: "https://compas-ai-production.up.railway.app/",
    technologies: [
      { name: "React", icon: "/assets/icons/skills/react.png" },
      { name: "Express", icon: "/assets/icons/skills/express.png" },
      { name: "OpenAI", icon: "/assets/icons/openai.svg" },
      { name: "MongoDB", icon: "/assets/icons/skills/mongodb.png" },
    ],
    features: [
      "Automated market analysis with Zillow-powered comparable property search",
      "AI valuation agent using GPT-4 for ARV analysis and valuation scoring",
      "AI-generated repair cost logic with renovation estimates and risk assessment",
      "Professional PDF reporting for investor-ready property reports",
      "Enterprise-ready infrastructure with Whop billing, JWT auth, and MongoDB backend",
    ],
    featured: true,
  },
  {
    slug: "engage-flow-sync",
    title: "Engage Flow Sync",
    description:
      "A smart CRM that helps sales teams manage leads and deals faster with AI-powered lead prioritization, chat assistance, and real-time pipeline visibility.",
    image: engageFlowImg,
    liveUrl: "https://ai-automated-crm.vercel.app/",
    githubUrl: "https://github.com/muhammad-noman732/AI-automated-crm",
    technologies: [
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "Supabase", icon: "/assets/icons/supabase.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
      { name: "OpenAI", icon: "/assets/icons/openai.svg" },
    ],
    features: [
      "AI lead scoring to automatically prioritize high-value leads",
      "AI chat assistant for CRM tasks, quick answers, and contextual support",
      "Easy scheduling with one-click Google Meet setup and email invites",
      "Real-time deal tracking across the full sales pipeline",
      "Secure 2FA with multi-factor authentication (MFA)",
    ],
    featured: true,
  },

  {
    slug: "therapy-care",
    title: "Therapy Care",
    description:
      "A modern, SEO-optimized professional mental health website built with Next.js, TypeScript, Tailwind CSS, and Prismic CMS. Everything loads dynamically from Prismic CMS, including slices, blogs, and all service sections, using SSR/SSG for strong performance and SEO.",
    image: therapyCloneImg,
    liveUrl: "https://bootcamp-therapy-clone.vercel.app/",
    githubUrl: "https://github.com/muhammad-noman732/Bootcamp-TherapyClone",
    technologies: [
      { name: "Next.js", icon: "/assets/icons/skills/nextjs.png" },
      { name: "TypeScript", icon: "/assets/icons/skills/typescript.png" },
      { name: "Tailwind CSS", icon: "/assets/icons/skills/tailwindcss.png" },
      { name: "Prismic CMS", icon: "/assets/icons/react.svg" },
      { name: "SSR/SSG", icon: "/assets/icons/react.svg" },
    ],
    features: [
      "All content loads from Prismic CMS (slices, posts, and all sections)",
      "Landing page content (hero, services, testimonials) managed in Prismic CMS",
      "Expertise, approach, and benefits fetched dynamically from Prismic CMS",
      "Case study catalog and service detail content sourced from Prismic CMS",
      "Blog content and dynamic pages powered by Prismic CMS with SSR/SSG",
    ],
  },
  
];
