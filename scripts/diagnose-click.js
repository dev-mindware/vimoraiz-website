const { chromium } = require('playwright');

async function diagnose() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:3001');
  await page.waitForTimeout(2000);

  // Check how many cards exist
  const cardCount = await page.$$eval('#servicos .group', els => els.length);
  console.log('Card count found:', cardCount);

  // Print text of all cards
  const cardTitles = await page.$$eval('#servicos .group h3', els => els.map(e => e.innerText));
  console.log('Card titles:', cardTitles);

  // Click first card
  console.log('Clicking first card...');
  await page.click('#servicos .group');
  await page.waitForTimeout(1000);

  // Check if modal exists in DOM
  const modalCount = await page.$$eval('.fixed.inset-0.z-50', els => els.length);
  console.log('Modal element count in DOM:', modalCount);

  await browser.close();
}

diagnose().catch(console.error);
