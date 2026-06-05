import { test, expect } from "@playwright/test";
import path from "path";
test("File upload assignment", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  //Upload a document without clicking the Upload button on the page
  const uploadFile = page.locator('[id="file-upload"]');
  uploadFile.setInputFiles(path.join(__dirname, '../../Data/Qeagle.jpeg'));
  await page.waitForTimeout(3000);

  //Upload an image inside the red square area
  const filePromise = page.waitForEvent("filechooser");
  await page.locator('[id="drag-drop-upload"]').click();
  const fileUpload = await filePromise
  await fileUpload.setFiles([path.join(__dirname, "../../Data/Testleaf.jpeg")]);
  await page.waitForTimeout(3000)
})

test.only("File download assignment", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");
  const filePromise = page.waitForEvent("download");
  await page.getByRole('link', { name: "random_data.txt" }).click();
  const fDown = await filePromise;
  await fDown.saveAs(path.join(__dirname, `../../Data/${fDown.suggestedFilename()}`));
  await page.waitForTimeout(3000);
})
