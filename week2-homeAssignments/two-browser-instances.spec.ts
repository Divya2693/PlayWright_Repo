import{test, chromium, firefox} from "@playwright/test"
test("To launch Msedge browser instances using Playwright", async() => {
const edgeBrowserInstance = await chromium.launch({ headless: false, channel: 'msedge'});
const  edgeBrowserContext = await edgeBrowserInstance.newContext();
const redBusPage = await edgeBrowserContext.newPage();
await redBusPage.goto("https://www.redbus.in/");
await redBusPage.waitForTimeout(3000);
const redbusPageTitle = await redBusPage.title();
console.log(`The page title is"${redbusPageTitle}"`);
const redBusPageUrl = await redBusPage.url();
console.log(`The page url is "${redBusPageUrl}"`);
})

//firefox instance
test("To launch firefox browser instances using Playwright", async() => {
const firefoxBrowserInstance = await firefox.launch({headless:false});
const firefoxBrowserContext = await firefoxBrowserInstance.newContext();
const flipKartPage = await firefoxBrowserContext.newPage();
await flipKartPage.goto("https://www.flipkart.com/");
await  flipKartPage.waitForTimeout(3000);
const flipkartPageTitle = await flipKartPage.title();
console.log(`The page title is "${flipkartPageTitle}"`);
const flipkartPageUrl = await flipKartPage.url();
console.log(`The page title is "${flipkartPageUrl}"`);
})