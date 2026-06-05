import {test, expect} from "@playwright/test"
test("To interact with iframes", async({page}) => {
await page.goto("https://dev304842.service-now.com/login.do");
await page.getByRole('textbox', {name : "User name"}).fill("admin");
await page.getByRole('textbox', {name : "Password"}).fill("T3REAv8g@lo@");
await page.getByRole('button', {name : "Log in"}).click();
//Click All
await page.getByRole('menuitem', {name : "All"}).click();
const clickFilter = await page.locator('[id="filter"]');
await clickFilter.fill("Service Catalog");
await page.waitForTimeout(3000);
await clickFilter.press('Enter');
const frame = page.frameLocator('[id="gsft_main"]');
await page.waitForTimeout(3000);
await frame.locator('//h2[contains(text(), "Mobiles")]').click();
await page.waitForTimeout(3000);
await frame.getByRole('link', {name : "Apple iPhone 13", exact : true}).click();
// Click No for ‘Is this a replacement for a lost or broken iPhone?
await frame.locator('//label[text()="No"]').click();
//Select 500 MB [$1.00] from the Monthly data allowance and get the count of items present
await frame.locator('[class="form-control cat_item_option "]').selectOption({index : 1});
await frame.locator('//label[text()="Starlight"]').click();
await frame.getByText("256 GB [add $100.00]").click();
await frame.getByRole('button', {name : "Order Now"}).click();
const tilte=await page.title()
console.log(tilte)
const url= page.url()
console.log(url)
})