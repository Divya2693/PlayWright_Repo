import { test , expect} from "@playwright/test"
test("Radio button home assignments", async ({ page }) => {
    await page.goto("https://leafground.com/radio.xhtml");
     //Identify and assert the default selected radio button.
     await expect(page.getByText("Safari").nth(1)).toBeEnabled();
     
     //Click your most favorite browser and assert that the browser is enabled.
const chromeBrowser = await page.getByText("Chrome").nth(0);
await chromeBrowser.click();
await expect(chromeBrowser).toBeEnabled;
//Click one of the cities.
 await page.getByText("Chennai").nth(0).click();
//Select the age group. Assert the default selected button.
await expect(page.getByText("21-40 Years")).toBeEnabled();
await page.waitForTimeout(3000);
})