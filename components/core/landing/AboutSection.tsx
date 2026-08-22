import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutSection() {
  const baseDelay = 480;

  return (
    <section className="py-8">
      <div
        className="animate-fade-in"
        style={{ animationDelay: `${baseDelay}ms` }}
      >
        <SectionHeader label="About" title="A Bit About Me" />
      </div>
      <div className="max-w-[72ch] text-[15px] leading-[1.8] text-muted-foreground">
        <p
          className="animate-fade-in"
          style={{ animationDelay: `${baseDelay + 80}ms` }}
        >
          Full-stack developer with hands-on production experience in MERN,
          Next.js, and React Native. I care about the whole picture, clean code,
          solid backend logic, smooth UX, and AI that fits the product.
        </p>
      </div>
    </section>
  );
}
