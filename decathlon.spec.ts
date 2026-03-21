import { expect, test } from "@playwright/test"

test("decathlon", async ({ page }) => {

    await page.goto("https://www.decathlon.in/");
    await page.locator('(//span[contains(text(),"Search for  ")])[1]').click();
    await page.getByPlaceholder("Search For 60+ Sports and 6000+ Products").fill("shoes");
    await page.locator('li').filter({ hasText: 'Shoes For Women' }).click();
    await page.locator('//span[contains(text(),"Women")]').click();
    await page.locator('//span[text()="Most Relevant"]').click();
    await page.locator('//span[text()="Most Relevant"]/following::li/a').last().click();
    await page.locator('//span[contains(text(),"Category")]/following::li[1]').click();
    await page.locator('//span[contains(text(),"Size")]/following::li[1]').click();
    const shoename = await page.locator('//ul[@class="ais-InfiniteHits-list"]/li[1]/div/div/div[2]/div[2]/a/p').textContent();
    console.log(shoename);
    await page.locator('//ul[@class="ais-InfiniteHits-list"]/li[1]/div/div/div[2]/button').click();
    await page.locator('//div[text()="5"]').click();
    await page.locator('//span[text()="ADD TO CART"]').click();
    await page.getByLabel('cart', { exact: true }).click();
    const item = await page.locator('//div[@data-test-id="in-stock-cart-items"]//div[@data-test-id="product-info"]/span').last().textContent();
    console.log(item);

    expect(shoename).toEqual(item);

    //await page.waitForTimeout(3000);
});



