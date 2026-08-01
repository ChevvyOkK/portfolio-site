function computeSpotlightEnabled(): boolean {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  return !reducedMotion && finePointer;
}

/** Snapshot for useSyncExternalStore. Server/first client render must agree, so it defaults to off. */
export function getSpotlightEnabledSnapshot(): boolean {
  return computeSpotlightEnabled();
}

export function getServerSpotlightEnabledSnapshot(): boolean {
  return false;
}

export function subscribeSpotlightEnabled(callback: () => void) {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerQuery = window.matchMedia("(pointer: fine)");
  motionQuery.addEventListener("change", callback);
  pointerQuery.addEventListener("change", callback);
  return () => {
    motionQuery.removeEventListener("change", callback);
    pointerQuery.removeEventListener("change", callback);
  };
}
