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
    await page.getByRole("textbox", {name : "Username", exact:true})
    await page.waitForTimeout(3000);
    //Click sales app
    await page.locator('//p[text()="Sales"]').click();
    await page.waitForTimeout(2000);
    //Click leads tab
    await page.locator('(//span[text()="Leads"])[1]').click();
        await page.waitForTimeout(2000);
    //click New button
    await page.locator('//div[text()="New"]').click();
        await page.waitForTimeout(2000);
    //select salutation
      await page.getByRole("combobox", {name :"Salutation"}).click();
   await page.locator('//span[text()="Ms."]').click();
//enter Lastname
await page.getByRole("textbox", {name :"Last Name"}).fill("Test2341")
//enter company name
await page.getByRole("textbox", {name :"Company"}).fill("Testleaf");
//click save
await page.getByRole("button", {name :"Save",  exact: true}).click();
await page.waitForTimeout(2000);
///Verify leads name created
expect(page.locator('//lightning-formatted-name')).toHaveText("Ms.  Test2341");
await page.waitForTimeout(3000);
/****************Edit lead**************** */
//click Edit button
await page.getByRole("button", {name :"Edit",  exact: true}).click();
//enter Lastname
await page.getByRole("textbox", {name :"Last Name"}).fill("Test23415")
//click save
await page.getByRole("button", {name :"Save",  exact: true}).click();
await page.waitForTimeout(2000);
///Verify Lead details are updated
expect(page.locator('//lightning-formatted-name')).toHaveText("Ms.  Test23415");
})