const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://bitheap.tech');
  await page.screenshot({ path: 'screenshot.png' });
  await authenticate(page);
  await browser.close();
})();

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  await page.click('#menu-item-2330');
  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME)
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS)
  await page.locator('xpath=/html/body/div[2]/div[2]/div/div/div[2]/div/div/div[2]/div/form/button').click()
  const text = await page.locator('#menu-item-2333').textContent()
  if(text != "Hello, Playwright")
    console.error("The authentication was not successful!")
  await page.screenshot({ path: 'screenshot2.png' });
}