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
  client = await page.target().createCDPSession();
  await page.goto(appURL);
  await page.evaluate("navigator.serviceWorker.ready");

  console.log("Going offline");
  await page.setOfflineMode(true);

  // Does === true for the main page but the fallback content isn't being served.
  page.on("response", r => console.log(r.fromServiceWorker()));

  await page.reload({ waitUntil: "networkidle0" });

  await page.waitFor(20000);
  await browser.close();
})();


//   await page.setRequestInterception(true);
  //   page.on("request", request => {
  //     request.continue();
  //   });

  

// browser = await puppeteer.launch();
//   page = await browser.newPage();
//   client = await page.target().createCDPSession();
//   await testPage(page, client); // only for creating fresh instance
//   await client.send('Network.enable');
//   await client.send('Network.clearBrowserCache');
//   console.log(await testPage(page, client)); // second enter only with sw
//   await browser.close();
