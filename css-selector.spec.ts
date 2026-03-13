import { chromium, firefox, test } from "@playwright/test"; // test function is imported from playwright library
test(`Test to launch a browser`, async () =>  {
    const browser =await chromium.launch() // Step1 launching the browser
    const context = await browser.newContext() // Step2 creating a new context
    const page    =await context.newPage() // Step3 new page created 
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`[id="username"]`).fill("democsr2");
    await page.locator(`#password`).fill("crmsfa");
    //await page.locator(`#submit`).click();
    await page.locator(`[class="decorativeSubmit"]`).first().click();
    await page.locator('img[src="/opentaps_images/integratingweb/crm.png"]').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator(`[id="createLeadForm_companyName"]`).fill("Motorola");
    await page.locator(`[id="createLeadForm_firstName"]`).fill("Rajeshwari");
    await page.locator(`[id="createLeadForm_lastName"]`).fill("Vijay");
    await page.locator(`#createLeadForm_personalTitle`).fill("QA Engineer");
    await page.locator(`#createLeadForm_generalProfTitle`).fill("Software Engineer");
    await page.locator(`#createLeadForm_annualRevenue`).fill("5 LPA");
    await page.locator(`#createLeadForm_departmentName`).fill("Testing Department");
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9696969696");
    await page.waitForTimeout(3000)
    await page.locator(`[class="smallSubmit"]`).first().click();
    await page.waitForTimeout(3000)
    const title = await page.title();
    console.log("Page Title:", title);
})