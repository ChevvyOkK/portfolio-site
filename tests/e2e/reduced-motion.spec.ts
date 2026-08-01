import { expect, test } from "@playwright/test";

test.use({ contextOptions: { reducedMotion: "reduce" } });

test("cursor spotlight glow layer is not rendered under prefers-reduced-motion", async ({
  page,
}) => {
  await page.goto("/");

  // The static dot-grid background still renders — only the pointer-tracking glow is skipped.
  await expect(page.locator(".spotlight-grid")).toHaveCount(1);
  await expect(page.locator(".spotlight-glow")).toHaveCount(0);
});
