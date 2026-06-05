//Create lead
import{expect, test} from "@playwright/test";
test('Login to Salesforce page', async({page}) => {
    await page.goto("https://login.salesforce.com/");
    //await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com");
   // await page.locator('#password').fill("TestLeaf@2025");
   await page.locator('[id="password"]').fill("TestLeaf@2025");
    //await page.locator('#Login').click();
    await page.locator('[id="Login"]').click();
    await page.waitForTimeout(3000);
    await page.getByTitle("App Launcher",{exact:true}).click();
    await page.waitForTimeout(3000);
    await page.getByRole("button", {name :"View All Applications"}).click();
    await page.waitForTimeout(3000);
    //Click Individuals
    await page.locator('//p[text()="Individuals"]').click();
    await page.waitForTimeout(2000);
//Click on the Dropdown icon in the Individuals tab
await page.locator('//span[text()="Individuals List"]').click();
    await page.waitForTimeout(2000);
    //Click on New Individual
    await page.locator('//span[text()="New Individual"]').click();
    await page.waitForTimeout(2000);
   //Enter the Last Name 
   await page.getByRole("textbox", {name : "Last Name *"}).fill("Lastname2");
   //Click Save button
   await page.getByRole("button", { name: 'Save', exact: true }).click();
  await page.waitForTimeout(2000);
//Verify individuals name
 expect(page.locator('(//span[@class="uiOutputText"])[1]')).toHaveText("Lastname2");
     await page.waitForTimeout(2000);
})