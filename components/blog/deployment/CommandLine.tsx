"use client";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CommandLineProps {
  cmd: string;
  note?: string;
}

export function CommandLine({ cmd, note }: CommandLineProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-4 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      {note && (
        <div className="px-4 py-1.5 border-b border-border bg-zinc-100 dark:bg-muted/30">
          <span className="text-xs text-muted-foreground">{note}</span>
        </div>
      )}

      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <Terminal className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
          <span className="font-mono text-sm text-zinc-900 dark:text-green-400 truncate">
            <span className="text-muted-foreground select-none mr-2">$</span>
            {cmd}
          </span>
        </div>

        <button
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy command"}
          className="
            ml-4 flex-shrink-0 flex items-center gap-1
            rounded px-2 py-1
            text-xs text-muted-foreground
            hover:text-foreground hover:bg-muted
            transition-colors
          "
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
