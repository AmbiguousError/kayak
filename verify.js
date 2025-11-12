const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/river_run.html');
  await page.waitForTimeout(5000); // Wait for the game to load
  await page.screenshot({ path: '/home/jules/verification/screenshot.png' });
  await browser.close();
})();
