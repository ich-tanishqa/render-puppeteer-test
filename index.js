import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.co.in/');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
