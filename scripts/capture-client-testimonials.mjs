import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:\\Users\\Administrator\\.gemini\\antigravity\\brain\\ea16ba17-088d-4016-98b4-6fc1592fe4db";

async function capture() {
  const browser = await chromium.launch({ channel: "msedge" });

  // 1. MOBILE CAPTURES (390 x 844)
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      colorScheme: theme,
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Clientes Section Mobile
    const clientsEl = page.locator("#clientes");
    await clientsEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await clientsEl.screenshot({
      path: path.join(artifactDir, `screenshot_mobile_clients_${theme}.png`),
    });

    // Testemunhos Section Mobile
    const testimonialsEl = page.locator("#testemunhos");
    await testimonialsEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await testimonialsEl.screenshot({
      path: path.join(artifactDir, `screenshot_mobile_testimonials_${theme}.png`),
    });

    await context.close();
  }

  // 2. DESKTOP CAPTURES (1440 x 900)
  for (const theme of ["light", "dark"]) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: theme,
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const clientsEl = page.locator("#clientes");
    await clientsEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await clientsEl.screenshot({
      path: path.join(artifactDir, `screenshot_desktop_clients_${theme}.png`),
    });

    const testimonialsEl = page.locator("#testemunhos");
    await testimonialsEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await testimonialsEl.screenshot({
      path: path.join(artifactDir, `screenshot_desktop_testimonials_${theme}.png`),
    });

    await context.close();
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

capture().catch((e) => {
  console.error("Capture failed:", e);
  process.exit(1);
});
