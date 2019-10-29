const puppeteer = require("puppeteer");
const chalk = require('chalk');
const sample = async () => {
  console.log(chalk.yellow("Sample Puppeteer example ====>"))
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
  await page.waitFor(1000);
  await browser.close();
}

module.exports = sample