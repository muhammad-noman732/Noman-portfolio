"use client";
import React from "react";
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="
        rounded-md border border-border
        bg-muted px-1.5 py-0.5
        font-mono text-[0.85em] text-foreground
      "
    >
      {children}
    </code>
  );
}
