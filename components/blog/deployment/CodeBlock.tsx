"use client";
// ─────────────────────────────────────────────────────────────────────────────
// components/blog/CodeBlock.tsx
// Phase 3 — Fenced-code wrapper with copy button + language badge
//
// rehype-pretty-code outputs:
//   <pre data-language="bash" data-theme="dark|light">
//     <code data-language="bash">…</code>
//   </pre>
//
// This component wraps that <pre> and layers the copy button on top.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  [key: string]: unknown; // forward data-* attrs from rehype-pretty-code
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const preRef  = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  // Pull language from the data attribute rehype-pretty-code adds
  const language =
    typeof props["data-language"] === "string"
      ? props["data-language"]
      : undefined;

  async function handleCopy() {
    const text = preRef.current?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative my-6 rounded-xl overflow-hidden border border-border bg-zinc-50 dark:bg-zinc-950">
      {/* ── Header bar ───────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-zinc-100 dark:bg-zinc-900">
        {language ? (
          <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
            {language}
          </span>
        ) : (
          <span /> // keep the flex row balanced when no language
        )}

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy code"}
          className="
            flex items-center gap-1.5
            rounded-md px-2 py-1
            text-xs font-medium
            text-muted-foreground
            hover:text-foreground
            hover:bg-muted
            transition-colors
            select-none
          "
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-500">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* ── The actual <pre> produced by rehype-pretty-code ──────────────── */}
      <pre
        ref={preRef}
        {...(props as React.HTMLAttributes<HTMLPreElement>)}
        className="overflow-x-auto p-5 text-sm leading-6 [&>code]:block"
      >
        {children}
      </pre>
    </div>
  );
}
