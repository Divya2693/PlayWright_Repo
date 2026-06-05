import { test, expect } from "@playwright/test"
test("To Create a new account", async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel("Password").fill("TestLeaf@2025");
    await page.getByRole('button', { name: "Log In" }).click();
    await page.waitForTimeout(3000);
    const pageTitle = await page.title();
    expect(pageTitle).toBe("Home | Salesforce");
    const pageUrl = await page.url();
    await expect(pageUrl).toBe("https://testleaf.lightning.force.com/lightning/page/home");
    await page.getByTitle("App Launcher", { exact: true }).click();
    await page.getByRole("button", { name: "View All Applications" }).click();
    const search = await page.getByPlaceholder("Search apps or items...");
    await search.fill("Service");
    await search.press('Enter');
    await page.locator('(//mark[text()="Service"])[1]').click();
    await page.getByTitle("Accounts", { exact: true }).click();
    await page.getByRole('button', { name: "New" }).click();
    // Enter Account name using attribute based CSS selecto
    await page.locator('input[name="Name"]').fill("First account");
    await page.getByRole('button', { name: "Save", exact: true }).click();
})