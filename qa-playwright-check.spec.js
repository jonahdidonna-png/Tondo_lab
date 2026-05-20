const { test, expect } = require("playwright/test");
const path = require("path");

const pages = [
  "index.html",
  "about.html",
  "corsi.html",
  "corso-ux-ui.html",
  "biblioteche.html",
  "biblioteca-braidense.html",
  "insegnante-alessia.html",
];

const viewports = [
  [390, 844],
  [768, 1024],
  [1024, 768],
  [1440, 900],
  [1920, 1080],
];

for (const pageName of pages) {
  for (const [width, height] of viewports) {
    test(`${pageName} has no horizontal overflow at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto(`file://${path.resolve(pageName)}`);
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyWidth: document.body.scrollWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
      expect(metrics.bodyWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    });
  }
}

test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`file://${path.resolve("index.html")}`);
  await page.locator("[data-nav-toggle]").click();
  await expect(page.locator("[data-site-nav]")).toHaveClass(/is-open/);
  await expect(page.locator("[data-nav-toggle]")).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-nav-toggle]")).toHaveAttribute("aria-expanded", "false");
});

test("home form shows simulated success", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`file://${path.resolve("index.html")}`);
  await page.locator("#home-name").fill("Ada");
  await page.locator("#home-surname").fill("Rossi");
  await page.locator("#home-phone").fill("123");
  await page.locator("#home-message").fill("Vorrei proporre un corso.");
  await page.locator("form[data-fake-form] button[type=submit]").click();
  await expect(page.locator(".form-status")).toContainText("Richiesta ricevuta");
});

test("course booking shows simulated feedback", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`file://${path.resolve("corso-ux-ui.html")}`);
  await page.locator("[data-booking-trigger]").first().click();
  await expect(page.locator(".booking-status").first()).toContainText("Prenotazione simulata");
});

test("teacher calendar, booking and FAQ work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`file://${path.resolve("insegnante-alessia.html")}`);
  await page.locator("[data-slot-id=slot-figma]").click();
  await expect(page.locator("[data-slot-title]")).toContainText("Introduzione a Figma");
  await page.locator(".slot-panel [data-booking-trigger]").click();
  await expect(page.locator(".slot-panel .booking-status")).toContainText("Prenotazione simulata");
  await page.locator("[data-accordion-trigger]").first().click();
  await expect(page.locator("[data-accordion-trigger]").first()).toHaveAttribute("aria-expanded", "true");
});
