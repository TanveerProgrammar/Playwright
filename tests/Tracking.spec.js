const{test,expect}=require("@playwright/test")

test.skip("Positive Test Case",async function({page}){

await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
await page.locator("//input[@placeholder='Order Number']").fill("")
await page.locator("//input[@placeholder='Your Email Address']").fill("tanveersalim24@gmail.com")
await page.locator("//button[@class='rounded-0 btn btn-success btn-block']").click()
await page.waitForTimeout(3000)

})

test.skip("Negative1 Test Case",async function({page}){

    await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
    await page.locator("//input[@placeholder='Order Number']").fill("")
    await page.locator("//input[@placeholder='Your Email Address']").fill("")
    await page.locator("//button[@class='rounded-0 btn btn-success btn-block']").click()
    await page.waitForTimeout(3000)
    
})

test.skip("Negative2 Test Case",async function({page}){

        await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
        await page.locator("//input[@placeholder='Order Number']").fill("")
        await page.locator("//input[@placeholder='Your Email Address']").fill("rohan")
        await page.locator("//button[@class='rounded-0 btn btn-success btn-block']").click()
        await page.waitForTimeout(3000)
        
})