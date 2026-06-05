import { test, expect } from "@playwright/test"
test("To Create a new account", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    const frame = page.frameLocator('[id="iframeResult"]');
    //Page listener
    page.on("dialog", async (alert) => { // playwrigt listener 
        console.log(`The type of alert is ${alert.type()}`);
        console.log(`The message inside the alert is ${alert.message()}`);
        if (alert.type() === 'confirm') {
            await alert.accept()
        } else {
            await alert.dismiss()
        }
    })
    await frame.getByRole('button', { name: "Try it" }).click();

    await expect(frame.locator('[id="demo"]')).toHaveText("You pressed OK!");
})