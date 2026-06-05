import { test, expect } from "@playwright/test"
test("To use CSS selectors", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill("democsr2");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();
    await page.getByRole("link", { name: "Leads" }).click();
    await page.getByRole("link", { name: "Create Lead" }).click();
    await page.locator('#createLeadForm_companyName').fill("Testleaffff");
    await page.locator('#createLeadForm_firstName').fill("Testing");
    await page.locator('#createLeadForm_lastName').fill("Domain");
    await page.locator('#createLeadForm_lastName').fill("Mr");
    await page.locator('#createLeadForm_generalProfTitle').fill("Creating leads");
    await page.locator('#createLeadForm_annualRevenue').fill("20000");
    await page.locator('#createLeadForm_departmentName').fill("Engineering");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9999");
    await page.locator('.smallSubmit').click();
    await page.waitForTimeout(3000);
    expect(await page.title()).toBe("View Lead | opentaps CRM");

    // Edit Leads
    //find leads
     await page.getByRole("link", { name: "Find Leads" }).click();
     await page.getByRole("textbox", { name: "First name:" }).fill("Testing")
     await page.getByRole("button", { name: "Find Leads" }).click();
     await page.getByRole("link", {name : "12400"}).click();
         //await page.waitForTimeout(3000);
      await page.locator('//a[text()="Edit"]').click();
       await page.locator('#updateLeadForm_companyName').fill("Company");
        await page.locator('#updateLeadForm_annualRevenue').fill("15000");
         await page.getByRole("button", { name: "Update" }).click();
         
})