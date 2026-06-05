import { test } from "@playwright/test"
import credentials from "../../Data/login.json"
test("Data parameterization using Json", async ({ page, context }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill(credentials[0].Username);
    await page.locator('#password').fill(credentials[0].Password);
    await page.locator('.decorativeSubmit').click();
    await page.getByRole("link", { name: "CRM/SFA" }).click();
    await page.getByRole("link", { name: "Leads" }).click();
    await page.getByRole("link", { name: "Create Lead" }).click();
    await page.locator('#createLeadForm_companyName').fill(credentials[0].CompanyName);
    await page.locator('#createLeadForm_firstName').fill(credentials[0].FirstName);
    await page.locator('#createLeadForm_lastName').fill(credentials[0].LastName);
    await page.selectOption('[id="createLeadForm_dataSourceId"]', { label: "Direct Mail" });
    await page.selectOption('[id="createLeadForm_marketingCampaignId"]', { value: "DEMO_MKTG_CAMP" });
    const marketingDropdwn = await page.locator('//select[id="createLeadForm_marketingCampaignId"]/option');
    const count = await marketingDropdwn.count();
    console.log(`The count of options ${count}`);
    for (let index = 0; index < count; index++) {
        console.log(await marketingDropdwn.nth(index).innerText());
    }
    await page.selectOption('[id="createLeadForm_industryEnumId"]', { index: 6 });
    await page.selectOption('[id="createLeadForm_currencyUomId"]', { value: "INR" });
    await page.selectOption('[id="createLeadForm_generalCountryGeoId"]', { value: "IND" });
    await page.selectOption('[id="createLeadForm_generalStateProvinceGeoId"]', { value: "FL" });
    const stateDropdwn = await page.locator('//select[id="createLeadForm_generalStateProvinceGeoId"]/option');
    const stateDDcount = await stateDropdwn.count();
    console.log(`The count of options ${stateDDcount}`);
    for (let index = 0; index < stateDDcount; index++) {
        console.log(await stateDropdwn.nth(index).innerText());
    }
    await page.waitForTimeout(3000);

})