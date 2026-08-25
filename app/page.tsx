import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";
import { HeroSection } from "@/components/core/landing/HeroSection";
import { AboutSection } from "@/components/core/landing/AboutSection";
import { SkillsSection } from "@/components/core/landing/SkillsSection";
import { ExperienceSection } from "@/components/core/landing/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/core/landing/FeaturedProjectsSection";
import { ContactSection } from "@/components/core/landing/ContactSection";
import GithubCalender from "@/components/core/landing/GithubCalender";
import { JsonLd, getProfilePageSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Muhammad Noman (Noman) | Full-Stack Developer Portfolio",
  description:
    "Muhammad Noman, also known as Noman, is a Lahore-based software engineer specializing in full-stack development, agentic AI, Next.js, React, React Native, and Python.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Muhammad Noman (Noman) | Full-Stack Developer",
    description:
      "Software engineer building end-to-end web and mobile products with clean architecture, practical AI integrations, and production-ready execution.",
    url: siteConfig.url,
    type: "profile",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Muhammad Noman — Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Noman (Noman) | Full-Stack Developer Portfolio",
    description:
      "Software engineer building end-to-end web and mobile products with clean architecture, practical AI integrations, and production-ready execution.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <Separator
          className="animate-fade-in -fade-in"
          style={{ animationDelay: "80ms" }}
        />
        <AboutSection />
        <GithubCalender />
        <Separator
          className="animate-fade-in -fade-in"
          style={{ animationDelay: "240ms" }}
        />
        <div className="animate-fade-in " style={{ animationDelay: "320ms" }}>
          <SkillsSection />
        </div>
        <Separator
          className="animate-fade-in -fade-in"
          style={{ animationDelay: "400ms" }}
        />
        <ExperienceSection />
        <Separator
          className="animate-fade-in -fade-in"
          style={{ animationDelay: "560ms" }}
        />
        <FeaturedProjectsSection />
        <Separator
          className="animate-fade-in -fade-in"
          style={{ animationDelay: "720ms" }}
        />
        <div className="animate-fade-in " style={{ animationDelay: "800ms" }}>
          <ContactSection />
        </div>
      </Container>

      {/* Homepage structured data */}
      <JsonLd data={getProfilePageSchema()} />
    </>
  );
}
