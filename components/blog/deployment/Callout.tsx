// ─────────────────────────────────────────────────────────────────────────────
// components/blog/Callout.tsx
// Phase 3 — Callout / alert box for MDX content
//
// Usage in .mdx:
//   <Callout type="warning">Never run this in production.</Callout>
//   <Callout type="info">This is an informational note.</Callout>
//   <Callout type="tip">Pro tip: use named Docker volumes.</Callout>
//   <Callout type="danger">This deletes all data permanently.</Callout>
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { AlertTriangle, Info, Lightbulb, Flame } from "lucide-react";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  {
    icon: React.ReactNode;
    containerClass: string;
    iconClass: string;
    label: string;
  }
> = {
  info: {
    icon: <Info className="h-4 w-4" />,
    containerClass:
      "border-blue-500/30 bg-blue-500/5 text-blue-900 dark:text-blue-300",
    iconClass: "text-blue-500",
    label: "Note",
  },
  warning: {
    icon: <AlertTriangle className="h-4 w-4" />,
    containerClass:
      "border-yellow-500/30 bg-yellow-500/5 text-yellow-900 dark:text-yellow-300",
    iconClass: "text-yellow-500",
    label: "Warning",
  },
  tip: {
    icon: <Lightbulb className="h-4 w-4" />,
    containerClass:
      "border-green-500/30 bg-green-500/5 text-green-900 dark:text-green-300",
    iconClass: "text-green-500",
    label: "Tip",
  },
  danger: {
    icon: <Flame className="h-4 w-4" />,
    containerClass:
      "border-red-500/30 bg-red-500/5 text-red-900 dark:text-red-300",
    iconClass: "text-red-500",
    label: "Danger",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon, containerClass, iconClass, label } = config[type];

  return (
    <div
      className={`my-6 rounded-lg border p-4 text-sm leading-6 ${containerClass}`}
    >
      <div className={`flex items-center gap-2 font-semibold mb-2 ${iconClass}`}>
        {icon}
        <span>{title ?? label}</span>
      </div>
      <div className="prose-p:mb-0 prose-p:mt-0 [&>p]:mb-0 [&>p]:text-inherit">
        {children}
      </div>
    </div>
  );
}
