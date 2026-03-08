import { chromium, firefox, test, webkit } from "@playwright/test"; // test function is imported from playwright library
test(`Test to launch a browser`, async () =>  {
    const browser =await chromium.launch() // Step1 launching the browser
    const context = await browser.newContext() // Step2 creating a new context
    const page    =await context.newPage() // Step3 new page created 
    await page.goto('https://login.salesforce.com/');
    await page.locator(`[id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`#password`).fill("TestLeaf@2025");
    //await page.locator(`#Login`).click();
    await page.locator(`[class="button r4 wide primary"]`).first().click();
    await page.waitForTimeout(3000)
})