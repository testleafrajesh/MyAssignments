import { expect, test } from "@playwright/test"
test.use({ permissions: ['geolocation'] })

test("PVR ticket booking ", async ({ page }) => {

    await page.goto("https://www.pvrcinemas.com/");
    await page.locator('//h6[text()="Bengaluru"]').click();
    await page.waitForLoadState('domcontentloaded');
    await page.locator('//span[text()="Cinema"]').click();
    await page.locator('//span[text()="Select Cinema"]').click();
    await page.locator('//span[text()="INOX Nexus Whitefield Bengaluru"]').click();
    await page.locator('//span[contains(text(),"Today")]').click();
    await page.locator('//span[text()="LOVE MOCKTAIL-3"]').nth(1).click();
    await page.locator('//span[contains(text(),"04:15 PM")]').click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByRole("button", { name: "Accept" }).click();
    await page.locator('//span[@id="CR.CLASSIC ROWS|J:5"]').click();
    await page.locator('//span[@id="CR.CLASSIC ROWS|J:6"]').click();
    const totalPrice =await page.locator('//div[@class="grand-prices"]/h6').innerText();
    const price = totalPrice.trim();
    await page.getByRole("button", { name: "Proceed" }).click();
    await page.getByRole("button", { name: "Skip & Proceed" }).click();
    const grandTotal =await page.locator('//div[@class="grand-tota col-md-3"]/h6[2]/span').innerText();
    const grand = grandTotal.trim();
    expect(price).toEqual(grand);
    await page.waitForTimeout(5000);
});