const puppeteer = require("puppeteer");
const chalk = require('chalk');

const swCaching = async () => {
  console.log(chalk.yellow("Running serviceworker caching...."))
  const appURL = "https://pankajladhar.github.io/speedy-math/#/";
  const viewPort = { width: 400, height: 600 };
  const launchConfig = {
    headless: false,
    defaultViewport: null,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  }
  const browser = await puppeteer.launch(launchConfig);
  const page = await browser.newPage();
  await page.goto(appURL);
  await page.evaluate("navigator.serviceWorker.ready");
  await page.waitFor(2000);

  console.log(chalk.white("\n\nResponse from serviceworker ===>"))
  page.on('response', r=>{
    const url = chalk.yellow(r.url());
    const status = r.fromServiceWorker() ? chalk.green('true') : chalk.red('false')
    console.log(url, status);
  });
  
  await page.reload({ waitUntil: "networkidle0" });
  await browser.close();
}

module.exports = swCaching


