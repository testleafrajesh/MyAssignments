import { chromium, firefox, test } from "@playwright/test"; // test function is imported from playwright library
test(`Launch Edge and open RedBus`, async () =>  {
    const browser = await chromium.launch({channel: "msedge",headless: false});//browser launch
    const context = await browser.newContext() // Step2 creating a new context
    const page    =await context.newPage() // Step3 new page created 
    await page.goto('https://www.redbus.in');
    const title = await page.title();
    console.log("Page Title:", title);
    const url = page.url();
    console.log("Page URL:", url);
    await page.waitForTimeout(4000)
});
test(`Launch Firefox and open Flipkart`, async () =>  {
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext() // Step2 creating a new context
    const page    =await context.newPage() // Step3 new page created 
    await page.goto('https://www.flipkart.com');
    const title = await page.title();
    console.log("Page Title:", title);
    const url = page.url();
    console.log("Page URL:", url);
    await page.waitForTimeout(4000)
})