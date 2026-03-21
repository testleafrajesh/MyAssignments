import { expect, test } from "@playwright/test"

test("Radio button validation", async ({ page }) => {

    // 1. Navigate to https://leafground.com/radio.xhtml
    await page.goto("https://leafground.com/radio.xhtml");

    // 2. Identify and assert the default selected radio button.
    await expect(page.locator('input[type="radio"][value="Option3"]')).toBeChecked();

    // 3. Click your most favorite browser 
    await expect(page.getByRole('radio', { name: 'Safari' }).nth(0)).toBeEnabled();
    await page.locator('//label[text()="Chrome"]').nth(0).click();

    // 4. Click one of the cities.
    await page.locator('//label[text()="Bengaluru"]').click();

    // 5. Select the age group.
    await expect(page.locator('input[type="radio"][value="21-40 Years"]')).toBeChecked();
    await page.locator('//label[text()="21-40 Years"]').click();

    await page.waitForTimeout(6000);
});
