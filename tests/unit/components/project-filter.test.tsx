import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PerspectiveProvider } from "@/components/perspective/perspective-provider";
import { ProjectFilter } from "@/components/projects/project-filter";
import { PROJECTS } from "@/content/projects";

function renderFilter() {
  return render(
    <PerspectiveProvider>
      <ProjectFilter projects={PROJECTS} />
    </PerspectiveProvider>,
  );
}

describe("ProjectFilter", () => {
  it("shows all projects by default", () => {
    renderFilter();
    for (const project of PROJECTS) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it("filters to only matching projects when a type chip is clicked", async () => {
    const user = userEvent.setup();
    renderFilter();

    await user.click(screen.getByRole("button", { name: "Симуляция" }));

    expect(screen.getByText("EvoSim")).toBeInTheDocument();
    expect(screen.queryByText("DevFlow Studio")).not.toBeInTheDocument();
  });

  it("resets to all projects when 'Все' is clicked again", async () => {
    const user = userEvent.setup();
    renderFilter();

    await user.click(screen.getByRole("button", { name: "Симуляция" }));
    await user.click(screen.getByRole("button", { name: "Все" }));

    for (const project of PROJECTS) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
