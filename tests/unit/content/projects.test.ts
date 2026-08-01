import { describe, expect, it } from "vitest";
import { PROJECT_TYPE_LABELS, PROJECTS } from "@/content/projects";

describe("content/projects", () => {
  it("has a unique slug per project", () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has a label for every project type used", () => {
    for (const project of PROJECTS) {
      expect(PROJECT_TYPE_LABELS[project.type]).toBeTruthy();
    }
  });

  it("has a pitch for all three perspectives on every project", () => {
    for (const project of PROJECTS) {
      expect(project.pitch.engineer).toBeTruthy();
      expect(project.pitch.recruiter).toBeTruthy();
      expect(project.pitch.client).toBeTruthy();
    }
  });

  it("has at least one stack entry and one highlight per project", () => {
    for (const project of PROJECTS) {
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });
});
