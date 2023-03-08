const{test,expect}=require('@playwright/test')

test.skip("spin wheel",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    await page.locator("//input[@name='email']").fill("tanveersalim24@gmail.com")
    await page.locator("//input[@name='password']").fill("Admin@11")
    await page.locator("//button[@class='style_customBtn1__cgP1R btn btn-primary btn-block']").click()
    await page.waitForTimeout(3000)
    await page.locator("//img[@class='giftBox']").click()
    await page.waitForTimeout(2000)
    await page.locator("//button[@class='style_spinButton__xtbLU btn btn-primary']").click()
    await page.waitForTimeout(10000)
})