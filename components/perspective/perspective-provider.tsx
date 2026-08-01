"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import {
  getPerspectiveSnapshot,
  getServerPerspectiveSnapshot,
  persistPerspective,
  subscribePerspective,
  type Perspective,
} from "@/lib/perspective";

type PerspectiveContextValue = {
  perspective: Perspective;
  setPerspective: (value: Perspective) => void;
};

const PerspectiveContext = createContext<PerspectiveContextValue | null>(null);

export function PerspectiveProvider({ children }: { children: React.ReactNode }) {
  const perspective = useSyncExternalStore(
    subscribePerspective,
    getPerspectiveSnapshot,
    getServerPerspectiveSnapshot,
  );

  return (
    <PerspectiveContext.Provider value={{ perspective, setPerspective: persistPerspective }}>
      {children}
    </PerspectiveContext.Provider>
  );
}

export function usePerspective() {
  const context = useContext(PerspectiveContext);
  if (!context) {
    throw new Error("usePerspective must be used within a PerspectiveProvider");
  }
  return context;
}
