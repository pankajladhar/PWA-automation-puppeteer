const puppeteer = require("puppeteer");
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
  await page.waitFor(1000);
  await browser.close();
})();

// sudo codesign -s MyCertificateName -f ./node_modules/puppeteer/.local-chromium/mac-674921/chrome-mac/Chromium.app --deep
