"use client";

interface PhaseHeadingProps {
  number: number;
  title: string;
}

export function PhaseHeading({ number, title }: PhaseHeadingProps) {
  return (
    <div className="my-12 flex items-center gap-5">
      {/* Big phase number pill */}
      <div
        className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-full bg-foreground text-background
          text-lg font-bold font-mono
          select-none
        "
      >
        {number}
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Phase {number}
        </span>
        <h2 className="text-2xl font-normal leading-tight tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      {/* Decorative line */}
      <div className="ml-4 h-px flex-1 bg-border" />
    </div>
  );
}
