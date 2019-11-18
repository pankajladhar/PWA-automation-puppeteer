const puppeteer = require("puppeteer");
const chalk = require('chalk');

const diskCaching = async () => {
  console.log(chalk.yellow("Running disk or memory caching...."))
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
  await page.waitFor(2000);
  
  console.log(chalk.white("Response from disk cache ===>"))
  
  page.on('response', r=>{
    const url = chalk.yellow(r.url());
    const status = r.fromCache() ? chalk.green('true') : chalk.red('false')
    console.log(url, status);
  });
  
  await page.reload({ waitUntil: "networkidle0" });
  await browser.close();
}

module.exports = diskCaching