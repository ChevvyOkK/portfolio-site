import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PerspectiveProvider } from "@/components/perspective/perspective-provider";
import { PerspectiveSwitcher } from "@/components/perspective/perspective-switcher";

describe("PerspectiveSwitcher", () => {
  it("marks the clicked option as checked and the rest as unchecked", async () => {
    const user = userEvent.setup();
    render(
      <PerspectiveProvider>
        <PerspectiveSwitcher />
      </PerspectiveProvider>,
    );

    const recruiterOption = screen.getByRole("radio", { name: "Рекрутер" });
    const engineerOption = screen.getByRole("radio", { name: "Инженер" });
    expect(recruiterOption).toHaveAttribute("aria-checked", "false");

    await user.click(recruiterOption);

    expect(recruiterOption).toHaveAttribute("aria-checked", "true");
    expect(engineerOption).toHaveAttribute("aria-checked", "false");
  });
});
