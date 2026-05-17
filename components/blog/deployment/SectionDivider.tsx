export function SectionDivider() {
  return (
    <div className="my-12 flex items-center gap-4" aria-hidden>
      <div className="h-px flex-1 bg-border" />
      <div className="flex gap-1.5">
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
