const puppeteer = require("puppeteer");
const chalk = require('chalk');
(async () => {
  const appURL = "https://pankajladhar.github.io/speedy-math/#/";
  const viewPort = { width: 400, height: 600 };
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [`--window-size=${viewPort.width},${viewPort.height}`],
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  const page = await browser.newPage();
  await page.goto(appURL);
  await page.evaluate("navigator.serviceWorker.ready"); // wait for sw to become active
  console.log("Going offline");
  await page.setOfflineMode(true); // Going offline
  // page.on('response', r => console.log(r.fromServiceWorker()));
  await page.reload({waitUntil: 'networkidle0'});
  const text = await page.$eval(".Offline-Banner", el => el.innerText);
  console.log(chalk.green(text));

  await page.waitFor(1000);
  await browser.close();
})();
