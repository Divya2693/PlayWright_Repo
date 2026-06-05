//Create lead
import { expect, test } from "@playwright/test";
test('Login to Salesforce page', async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[id="password"]').fill("TestLeaf@2025");
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(3000);
    await page.getByTitle("App Launcher", { exact: true }).click();
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "View All Applications" }).click();
    await page.waitForTimeout(3000);
    //Click Individuals
    await page.locator('//p[text()="Individuals"]').click();
    await page.waitForTimeout(2000);
    // Search the Individuals last name ;
    await page.getByRole("searchbox", { name: "Search this list..." }).fill("Lastname2");
    await page.waitForTimeout(2000);
    await page.getByRole("searchbox", { name: "Search this list..." }).press("Enter");
    await page.waitForTimeout(2000);
    //click the individual link
    await page.getByRole("button", { name: "Show Actions" }).first().click()
    await page.waitForTimeout(4000);
    //Click Edit button
    await page.getByText('Edit', {exact : true}).nth(1).click();
     
    //select salutation
  await page.getByRole("button", {name :"Salutation"}).click();
    //await page.locator('//span[text()="Mr."]').click();
    await page.getByText("Mr.").click();
    //enter first name
    await page.getByRole("textbox", { name: "First Name" }).fill("Firstname1");
    //Click Save button
    await page.getByRole("button", { name: 'Save', exact: true }).click();
    await page.waitForTimeout(2000);
    //verify the individual
    await expect(page.getByRole('link', { name: 'Firstname1 Lastname2' })).toBeVisible();
    
})