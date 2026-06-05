import { test } from "@playwright/test"
test("Dropdown home assignments", async ({ page }) => {
    await page.goto("https://leafground.com/select.xhtml");
    //Select your favorite UI automation tool using the different select options
    await page.selectOption('//select[@class="ui-selectonemenu"]', { label: "Selenium" });
    const dropdownOptions = page.locator('//select[@class="ui-selectonemenu"]/option');
    //Get the count and print of all the values
    const count = await dropdownOptions.count();
    console.log(`The count of options ${count}`)
    for (let index = 0; index < count; index++) {
        console.log(await dropdownOptions.nth(index).innerText());
    }
    //Choose your preferred Country
    await page.locator('//label[contains(@id,"country_label")]').click();
    //Confirm Cities belongs to Country is loaded
    await page.getByText('India').nth(1).click();
    //Choose any three courses from the dropdown
    await page.getByRole("button", { name: "Show Options" }).click();
    await page.getByText('AWS').nth(1).click();
    await page.getByText('Playwright').nth(1).click();
    // Choose a language and print all the values from the dropdown.
    await page.getByText('Select Language').nth(1).click();
    await page.getByText('Tamil').nth(1).click();
    await page.getByText('Malayalam').nth(1).click();

})