export type Perspective = "engineer" | "recruiter" | "client";

export const PERSPECTIVES: { value: Perspective; label: string }[] = [
  { value: "engineer", label: "Инженер" },
  { value: "recruiter", label: "Рекрутер" },
  { value: "client", label: "Заказчик" },
];

export const DEFAULT_PERSPECTIVE: Perspective = "engineer";

const STORAGE_KEY = "perspective";
const QUERY_KEY = "view";
const CHANGE_EVENT = "perspective-change";

function isPerspective(value: string | null): value is Perspective {
  return value === "engineer" || value === "recruiter" || value === "client";
}

/** Snapshot for useSyncExternalStore. URL takes priority so a shared `?view=` link always wins. */
export function getPerspectiveSnapshot(): Perspective {
  const fromUrl = new URLSearchParams(window.location.search).get(QUERY_KEY);
  if (isPerspective(fromUrl)) return fromUrl;

  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (isPerspective(fromStorage)) return fromStorage;

  return DEFAULT_PERSPECTIVE;
}

export function getServerPerspectiveSnapshot(): Perspective {
  return DEFAULT_PERSPECTIVE;
}

export function persistPerspective(value: Perspective) {
  window.localStorage.setItem(STORAGE_KEY, value);

  const url = new URL(window.location.href);
  url.searchParams.set(QUERY_KEY, value);
  window.history.replaceState(null, "", url);

  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribePerspective(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
