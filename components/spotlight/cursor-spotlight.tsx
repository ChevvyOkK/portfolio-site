"use client";

import { useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import {
  getServerSpotlightEnabledSnapshot,
  getSpotlightEnabledSnapshot,
  subscribeSpotlightEnabled,
} from "@/lib/motion";

type CursorSpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps a section with a faint dot-grid background that a soft accent-colored
 * glow reveals as the cursor moves over it. Disabled for touch pointers and
 * `prefers-reduced-motion` — in that case only the static grid is shown.
 */
export function CursorSpotlight({ children, className }: CursorSpotlightProps) {
  const frameRef = useRef(0);
  const interactive = useSyncExternalStore(
    subscribeSpotlightEnabled,
    getSpotlightEnabledSnapshot,
    getServerSpotlightEnabledSnapshot,
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (frameRef.current) return;
    frameRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--spotlight-x", `${clientX - rect.left}px`);
      target.style.setProperty("--spotlight-y", `${clientY - rect.top}px`);
      target.style.setProperty("--spotlight-opacity", "1");
      frameRef.current = 0;
    });
  }

  function handlePointerLeave(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  }

  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      onPointerMove={interactive ? handlePointerMove : undefined}
      onPointerLeave={interactive ? handlePointerLeave : undefined}
    >
      <div aria-hidden="true" className="spotlight-grid pointer-events-none absolute inset-0" />
      {interactive && (
        <div aria-hidden="true" className="spotlight-glow pointer-events-none absolute inset-0" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
