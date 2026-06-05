import { test, expect } from "@playwright/test";
import path from "path";
test("File upload assignment", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");
  await page.getByLabel("Username", { exact: true }).fill("dilipkumar.rajendran@testleaf.com")
  await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025")
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTitle("App Launcher", { exact: true }).click();
  await page.getByText("View All", { exact: true }).nth(2).click();
  const search = await page.getByPlaceholder("Search apps or items...");
  await search.fill("Accounts");
  await page.waitForTimeout(3000);
  await search.press('Enter');
  await page.locator('//mark[text()="Accounts"]').click();
  await page.getByRole('button', { name: "New" }).click();
  await page.locator('input[name="Name"]').fill("qwertyuiop");
  await page.getByRole('combobox', { name: "Type" }).click();
  await page.getByText('Prospect').click();
  await page.getByRole('combobox', { name: "Industry" }).click();
  await page.getByText('Banking').click();
  await page.getByRole('button', { name: "Save", exact: true }).click();
  await expect(page.locator('//slot[@name="primaryField"]')).toHaveText("qwertyuiop");
  const filePromise = page.waitForEvent("filechooser");
  await page.locator(`//span[@part="button"]`).click();
  const fileUpload = await filePromise
  await fileUpload.setFiles([path.join(__dirname, "../../Data/Qeagle.jpeg")]);
  await page.waitForTimeout(3000);
})