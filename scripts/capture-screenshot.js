const { chromium } = require('playwright');
const path = require('path');

async function capture() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Wait for initial Framer Motion entrance animations to settle
  await page.waitForTimeout(2000);
  
  const artifactDir = 'C:/Users/Administrator/.gemini/antigravity/brain/ea16ba17-088d-4016-98b4-6fc1592fe4db';
  const screenshotPath = path.join(artifactDir, 'screenshot_hero.png');
  
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Hero screenshot captured at:', screenshotPath);
  
  await browser.close();
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
