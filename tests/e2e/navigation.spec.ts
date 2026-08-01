import { expect, test } from "@playwright/test";

test("home → projects → case study → back", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.getByRole("link", { name: "Проекты", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);

  await page.getByRole("link", { name: /EvoSim/ }).click();
  await expect(page).toHaveURL(/\/projects\/evosim$/);
  await expect(page.getByRole("heading", { name: "EvoSim" })).toBeVisible();

  await page.getByRole("link", { name: "Все проекты" }).click();
  await expect(page).toHaveURL(/\/projects$/);
});

test("about and contact pages load", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText("@Chevvyxd")).toBeVisible();
});
