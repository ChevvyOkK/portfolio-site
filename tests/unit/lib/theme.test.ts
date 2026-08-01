import { beforeEach, describe, expect, it } from "vitest";
import { applyTheme, getThemeSnapshot, toggleTheme } from "@/lib/theme";

describe("lib/theme", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    window.localStorage.clear();
  });

  it("defaults to light when no dark class is present", () => {
    expect(getThemeSnapshot()).toBe("light");
  });

  it("applyTheme adds/removes the dark class and persists to localStorage", () => {
    applyTheme("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("theme")).toBe("dark");

    applyTheme("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("theme")).toBe("light");
  });

  it("toggleTheme flips based on current DOM state", () => {
    expect(getThemeSnapshot()).toBe("light");
    toggleTheme();
    expect(getThemeSnapshot()).toBe("dark");
    toggleTheme();
    expect(getThemeSnapshot()).toBe("light");
  });
});
