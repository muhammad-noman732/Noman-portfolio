import Image from "next/image";
import { siteConfig, socialLinks } from "@/constants/site";
import avatar from "@/public/avatar.png";
import { FlipWords } from "@/components/ui/FlipWords";
import { Button } from "@/components/ui/Button";
const words = ["Software Engineer", "Iterator"];

export function HeroSection() {
  return (
    <section className="py-16">
      <div className="flex max-w-[72ch] flex-col">
        <div
          className="flex items-center gap-4 animate"
          style={{ animationDelay: "0ms" }}
        >
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={avatar}
              alt={siteConfig.name}
              fill
              placeholder="blur"
              className="object-cover object-center scale-[1.08]"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[30px] font-medium leading-[1.05] tracking-[-0.045em] text-foreground sm:text-[40px]">
              {siteConfig.name}
            </h1>
            <FlipWords
              words={words}
              duration={1000}
              className="mt-1 text-[14px] font-normal text-muted-foreground sm:text-[15px]"
            />
          </div>
        </div>

        <div className="mt-8 animate" style={{ animationDelay: "80ms" }}>
          <p className="max-w-[62ch] text-[15px] font-normal leading-[1.75] text-muted-foreground sm:text-[16px] sm:leading-[1.8]">
            I build end-to-end web and mobile products with clean architecture,
            practical AI integrations, and production-ready execution. Based in
            Lahore.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 animate"
          style={{ animationDelay: "160ms" }}
        >
          <Button
            href="/blog"
            variant="outline"
            className="border-accent/60 bg-accent/10 px-3 py-1.5 text-[13px] text-foreground hover:border-accent hover:bg-accent/20"
          >
            Read Blog
          </Button>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
