import { expect, test } from "@playwright/test";

test("filtering projects by type on /projects", async ({ page }) => {
  await page.goto("/projects");

  await expect(page.getByText("DevFlow Studio")).toBeVisible();
  await expect(page.getByText("EvoSim")).toBeVisible();

  await page.getByRole("button", { name: "Симуляция" }).click();

  await expect(page.getByText("EvoSim")).toBeVisible();
  await expect(page.getByText("DevFlow Studio")).toHaveCount(0);
});
