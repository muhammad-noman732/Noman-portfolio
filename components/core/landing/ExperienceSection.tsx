import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/constants/experiences";
import { getTechSvgIcon } from "@/constants/tech-icons";

function CompanyAvatar({
  name,
  image,
}: {
  name: string;
  image?: (typeof experiences)[number]["companyImage"];
}) {
  if (image) {
    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/80 bg-[#f5f5f4]/80 px-1.5 shadow-sm dark:bg-[#1b1b1b]">
        <Image
          src={image}
          alt={`${name} logo`}
          placeholder="blur"
          className="object-contain"
          sizes="36px"
        />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-linear-to-br from-muted/90 to-background text-[10px] font-semibold tracking-[0.14em] text-muted-foreground"
    >
      {initials}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-16">
      <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
        <SectionHeader label="Experience" title="Where I&apos;ve Worked" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-[20px] top-0 bottom-0 w-px bg-border/80" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <article
              key={exp.company}
              className={cn(
                "animate-fade-in relative pl-14",
                i !== experiences.length - 1 && "",
              )}
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <div className="absolute left-[13px] top-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
              </div>

              <div className="flex flex-col gap-2 pb-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <CompanyAvatar name={exp.company} image={exp.companyImage} />
                  <div>
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-foreground">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <span className="text-sm tabular-nums text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <div className="mt-1 ml-1 text-sm text-muted-foreground">
                {exp.company}
              </div>

              {exp.location && (
                <div className="mt-1 ml-1 text-sm text-muted-foreground">
                  {exp.location}
                </div>
              )}

              {exp.highlights?.length ? (
                <ul className="mt-4 space-y-3 pl-0 text-[0.96rem] leading-relaxed text-muted-foreground">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              )}

              {exp.techStack?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.techStack.map((stack) => (
                    <Badge
                      key={stack}
                      className="rounded-full border border-border/70 bg-[#f5f5f4]/80 px-2.5 py-1 text-[11px] text-foreground dark:bg-[#a8a29e12]"
                      techIcon={getTechSvgIcon(stack)}
                      techIconAlt={stack}
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
