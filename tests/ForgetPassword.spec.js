const{test,expect}=require('@playwright/test')

test.skip("Postive Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/username-recovery")
await page.locator("//input[@name='email']").fill("tanveersalim24@gmail.com")
await page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']").click()
await page.waitForTimeout(4000)
})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/username-recovery")
    await page.locator("//input[@name='email']").fill("tanveersalim24")
    await page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']").click()
    await expect("//div[text()='Please provide valid email']").toContain("Please provide valid email")
    await page.waitForTimeout(2000)
})

test.skip("Negative2 Test Case",async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/username-recovery")
        await page.locator("//input[@name='email']").fill("")
        await page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']").click()
       await expect("//div[text()='Please provide valid email']").toContain("Please provide email")
        await page.waitForTimeout(4000)
})

