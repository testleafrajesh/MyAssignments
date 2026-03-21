import { expect, test } from "@playwright/test"

test("checkbox", async ({ page }) => {

    //1. Navigate to https://leafground.com/checkbox.xhtml
    page.goto("https://leafground.com/checkbox.xhtml");

    // 2. Click on the "Basic Checkbox.”
    const basicCheckbox = page.locator('//span[text()="Basic"]')
    await basicCheckbox.isEnabled();
    await basicCheckbox.click();

    // 3. Click on the "Notification Checkbox."
    await page.locator('//span[text()="Ajax"]').click();

    // 4. Verify that the expected message is displayed.
    const NotificationMsg = page.getByRole("alert", { name: "Checked" });
    await NotificationMsg.isVisible();
    expect(await page.locator('//span[text()="Checked"]')).toContainText("Checked");

    // 5. Click on your favorite language (assuming it's related to checkboxes).
    await page.locator('//label[text()="Java"]/preceding-sibling::div').click();
    await page.locator('//label[text()="Javascript"]/preceding-sibling::div').click();

    // 6. Click on the "Tri-State Checkbox."
    await page.locator('//div[@id="j_idt87:ajaxTriState"]').click();

    // 7. Verify which tri-state option has been chosen.
    const tristateMsg = page.getByRole("alert", { name: "State has been changed." });
    await tristateMsg.isVisible();
    expect(await page.locator('//p[contains(text(),"State")]')).toContainText("State = 1");

    // 8. Click on the "Toggle Switch."
    await page.locator('//div[@class="ui-toggleswitch-slider"]').click();

    // 9. Verify that the expected message is displayed.
    expect(await page.locator('//span[text()="Checked"]')).toContainText("Checked");

    // 10. Verify if the Checkbox is disabled.
    expect(await page.locator('//span[text()="Disabled"]/preceding-sibling::div/input')).toBeDisabled();

    // 11. Select multiple options on the page (details may be needed).
    await page.locator('//ul[@data-label="Cities"]').click();
    await page.locator('//label[text()="Miami"]/preceding-sibling::div').click();
    await page.locator('//label[text()="Barcelona"]/preceding-sibling::div').click();
    await page.locator('//a[@aria-label="Close"]').click();

    await page.waitForTimeout(5000);
});