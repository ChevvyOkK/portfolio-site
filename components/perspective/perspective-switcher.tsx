"use client";

import { usePerspective } from "@/components/perspective/perspective-provider";
import { cn } from "@/lib/cn";
import { PERSPECTIVES } from "@/lib/perspective";

export function PerspectiveSwitcher({ className }: { className?: string }) {
  const { perspective, setPerspective } = usePerspective();

  return (
    <div
      role="radiogroup"
      aria-label="Перспектива просмотра портфолио"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1",
        className,
      )}
    >
      {PERSPECTIVES.map((item) => (
        <button
          key={item.value}
          type="button"
          role="radio"
          aria-checked={perspective === item.value}
          onClick={() => setPerspective(item.value)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            perspective === item.value
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
