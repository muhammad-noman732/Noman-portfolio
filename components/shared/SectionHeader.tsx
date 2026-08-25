import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  className?: string;
  headingLevel?: "h1" | "h2";
}

export function SectionHeader({
  label,
  title,
  className,
  headingLevel = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      {label && (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          {label}
        </p>
      )}
      {headingLevel === "h1" ? (
        <h1 className="text-balance text-[36px] font-normal leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[48px]">
          {title}
        </h1>
      ) : (
        <h2 className="text-balance text-[36px] font-normal leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[48px]">
          {title}
        </h2>
      )}
    </div>
  );
}
