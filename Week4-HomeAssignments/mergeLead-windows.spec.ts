import { test, expect } from "@playwright/test"
test("To use CSS selectors", async ({ page, context }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();
    await page.getByRole("link", { name: "Leads" }).click();
    await page.getByRole("link", { name: "Merge Leads" }).click();
    //Windows handling
    const pagePromise = context.waitForEvent("page");
    await page.getByRole("link", { name: "Lookup" }).nth(0).click();
    const childPage = await pagePromise;
    await childPage.waitForLoadState("domcontentloaded");
    await childPage.getByRole("link", { name: "10119", exact: true }).click();
    await page.bringToFront();
    console.log("Page title", await page.title());
    const secondPagePromise = context.waitForEvent("page");
    await page.getByRole("link", { name: "Lookup" }).nth(1).click();
    const secondChilePage = await secondPagePromise;
    await secondChilePage.waitForLoadState("domcontentloaded");
    await secondChilePage.getByRole("link", { name: "10120", exact: true }).click();
    await page.bringToFront();
    // Click Merge button 
    await page.getByRole("link", { name: "Merge" }).nth(1).click();
    //Alert handling
    page.on("dialog", async (alert) => { // playwrigt listener 
        console.log(`The type of alert is ${alert.type()}`)// Return the type of alert => simple, confirm, prompt
        console.log(`The message inside the alert is ${alert.message()}`)
        if (alert.type() === 'confirm') {
            await alert.accept()
        } else {
            await alert.dismiss()
        }
    })
    await page.waitForTimeout(3000);
    //await page.getByRole("link", { name: "Merge" }).nth(1).click();
    console.log("Page title1", await page.title());
    await page.waitForTimeout(3000);
})