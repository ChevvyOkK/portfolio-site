import { devices, expect, test } from "@playwright/test";

test.use({ ...devices["Pixel 5"] });

test("mobile menu opens, closes, and its links navigate", async ({ page }) => {
  await page.goto("/");

  const projectsLink = page.getByRole("link", { name: "Проекты", exact: true });

  // Before opening, only the (CSS-hidden) desktop nav link exists — the mobile
  // panel isn't in the DOM at all until `open` is true.
  await expect(projectsLink).toBeHidden();

  await page.getByRole("button", { name: "Открыть меню" }).click();
  // Now both the hidden desktop link and the visible mobile one match — the
  // mobile panel renders after the desktop nav, so it's the last match.
  await expect(projectsLink.last()).toBeVisible();

  await page.getByRole("button", { name: "Закрыть меню" }).click();
  await expect(projectsLink).toBeHidden();

  await page.getByRole("button", { name: "Открыть меню" }).click();
  await projectsLink.last().click();
  await expect(page).toHaveURL(/\/projects$/);
});
