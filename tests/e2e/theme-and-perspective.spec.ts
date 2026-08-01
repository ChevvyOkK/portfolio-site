import { expect, test } from "@playwright/test";

test("theme toggle persists across reload", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /тёмную тему|светлую тему/ }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);

  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("switching perspective updates the hero headline and the URL", async ({ page }) => {
  await page.goto("/");

  const engineerHeading = await page.getByRole("heading", { level: 1 }).textContent();

  await page.getByRole("radio", { name: "Рекрутер" }).click();
  await expect(page).toHaveURL(/view=recruiter/);

  const recruiterHeading = await page.getByRole("heading", { level: 1 }).textContent();
  expect(recruiterHeading).not.toBe(engineerHeading);
});
