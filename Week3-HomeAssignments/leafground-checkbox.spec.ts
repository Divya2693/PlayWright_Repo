import {test, expect} from "@playwright/test"
test("To test checkbox functionalities", async({page}) => {
await page.goto("https://leafground.com/checkbox.xhtml");
//Click on the "Basic Checkbox"
await page.getByText("Basic",{exact : true}).click();
//Click on the "Notification Checkbox"
await page.getByText("Ajax").click();
//Verify that the expected message is displayed
await expect(page.getByText("Checked")).toBeVisible();
//Click on your favorite language 
await page.getByText("Java", {exact : true}).click();
//Click on the "Tri-State Checkbox
await page.locator('//div[contains(@id,"ajaxTriState")]').click();
await expect(page.getByText("State has been changed")).toBeVisible();
//Click on the "Toggle Switch."
await page.locator('.ui-toggleswitch-slider').click();
await expect(page.getByText("Checked")).toBeVisible();
//Verify if the Checkbox is disabled
await expect(page.getByRole("checkbox", {name : "Disabled"})).toBeDisabled();
 //Select multiple options on the page (details may be needed).
 await page.locator('[class="ui-icon ui-icon-triangle-1-s"]').click();
 await page.getByText('Paris', { exact: true }).nth(1).click();
 await expect(page.locator('[class="ui-selectcheckboxmenu-token-label"]')).toHaveText("Paris");
 await page.waitForTimeout(3000)
})