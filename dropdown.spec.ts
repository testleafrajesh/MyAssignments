import { test } from "@playwright/test"

test("dropdown", async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml");

    // Select your favorite UI automation tool using the different select options
    const uiAutomationDropedown = page.locator('//select[@class="ui-selectonemenu"]/option');
    const uiAutomationDropedownCount = await uiAutomationDropedown.count();
    for (let ui = 1; ui < uiAutomationDropedownCount; ui++) {
        console.log(await uiAutomationDropedown.nth(ui).innerText());
    }
    await page.selectOption('//select[@class="ui-selectonemenu"]', { label: "Playwright" });

    //Choose your preferred Country
    await page.locator('//label[contains(text(),"Select Country")]').click();
    await page.locator('//li[contains(text(),"India")]').click();
    //Choose your preferred city belongs to country
    await page.locator('//label[contains(text(),"Select City")]').click();
    await page.locator('//li[contains(text(),"Chennai")]').click();

    //Choose any three courses from the dropdown
    await page.locator('//button[contains(@class,"ui-autocomplete-dropdown")]').click();
    await page.locator('//li[text()="Playwright"]').click();
    await page.locator('//button[contains(@class,"ui-autocomplete-dropdown")]').click();
    await page.locator('//li[text()="RestAssured"]').click();
    await page.locator('//button[contains(@class,"ui-autocomplete-dropdown")]').click();
    await page.locator('//li[text()="PostMan"]').click();

    //Choose a language and print all the values from the dropdown
    await page.locator('//label[contains(text(),"Select Language")]').click();
    const languageDropdownValues = page.locator('//li[contains(@class,"ui-selectonemenu-item")]');
    const languageDropdownCount = await languageDropdownValues.count();
    let leng;
    for (leng = 1; leng < languageDropdownCount; leng++) {
        console.log(await languageDropdownValues.nth(leng).innerText());
    }
    for (leng = 1; leng < languageDropdownCount; leng++) {
        if (await languageDropdownValues.nth(leng).innerText() === "Kannada") {
            await languageDropdownValues.nth(leng).click();
        }
    }

    //Select 'Two' irrespective of the language chosen
    await page.locator('//label[text()="Select Values"]').click();
    await page.locator('//li[contains(text(),"ಎರಡು")]').click();

    await page.waitForTimeout(5000);
});