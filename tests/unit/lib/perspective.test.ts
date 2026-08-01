import { beforeEach, describe, expect, it } from "vitest";
import { DEFAULT_PERSPECTIVE, getPerspectiveSnapshot, persistPerspective } from "@/lib/perspective";

function setUrl(search: string) {
  window.history.replaceState(null, "", `/${search}`);
}

describe("lib/perspective", () => {
  beforeEach(() => {
    window.localStorage.clear();
    setUrl("");
  });

  it("defaults to engineer when nothing is set", () => {
    expect(getPerspectiveSnapshot()).toBe(DEFAULT_PERSPECTIVE);
  });

  it("reads a valid value from localStorage", () => {
    window.localStorage.setItem("perspective", "client");
    expect(getPerspectiveSnapshot()).toBe("client");
  });

  it("ignores an invalid localStorage value", () => {
    window.localStorage.setItem("perspective", "bogus");
    expect(getPerspectiveSnapshot()).toBe(DEFAULT_PERSPECTIVE);
  });

  it("prioritizes the view query param over localStorage", () => {
    window.localStorage.setItem("perspective", "client");
    setUrl("?view=recruiter");
    expect(getPerspectiveSnapshot()).toBe("recruiter");
  });

  it("ignores an invalid view query param and falls back to storage", () => {
    window.localStorage.setItem("perspective", "client");
    setUrl("?view=nonsense");
    expect(getPerspectiveSnapshot()).toBe("client");
  });

  it("persistPerspective writes localStorage and the URL", () => {
    persistPerspective("recruiter");
    expect(window.localStorage.getItem("perspective")).toBe("recruiter");
    expect(new URLSearchParams(window.location.search).get("view")).toBe("recruiter");
  });
});
