import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();

  // Set User-Agent to Chrome 80 (older version)
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
  );

  await page.goto('https://www.zomato.com/');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  await browser.close();
})();
