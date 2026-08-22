import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      {label && (
        <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </p>
      )}
      <h2 className="text-balance text-[36px] font-normal leading-[1] tracking-[-0.06em] text-foreground sm:text-[48px]">
        {title}
      </h2>
    </div>
  );
}
