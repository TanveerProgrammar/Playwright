const{test,expect}=require("@playwright/test")

test.skip("Search word1",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/")
await page.locator("//select[@name='categoryId']").selectOption("Beauty & Grooming")
await page.locator("//input[@placeholder='Search Your Product Here']").fill("Cream")
await page.locator("//button[@name='searchButton']").click()
await page.waitForTimeout(5000)

})

test.skip("Search word2",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/")
    await page.locator("//select[@name='categoryId']").selectOption("Home & Lifestyle")
    await page.locator("//input[@placeholder='Search Your Product Here']").fill("Microwave")
    await page.locator("//button[@name='searchButton']").click()
    await page.waitForTimeout(5000)
    
})

test.skip("Search word3",async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/")
        await page.locator("//select[@name='categoryId']").selectOption("Mobile & Tablets")
        await page.locator("//input[@placeholder='Search Your Product Here']").fill("Cable")
        await page.locator("//button[@name='searchButton']").click()
        await page.waitForTimeout(5000)
        
})

test.skip("Search word4",async function({page}){
            await page.goto("https://testing.ui.plentyz.pk/")
            await page.locator("//select[@name='categoryId']").selectOption("Computing")
            await page.locator("//input[@placeholder='Search Your Product Here']").fill("Computer")
            await page.locator("//button[@name='searchButton']").click()
            await page.waitForTimeout(5000)
            
})
            
test.skip("Search word5",async function({page}){
                await page.goto("https://testing.ui.plentyz.pk/")
                await page.locator("//select[@name='categoryId']").selectOption("Mobile & Tablets")
                await page.locator("//input[@placeholder='Search Your Product Here']").fill("Power Bank")
                await page.locator("//button[@name='searchButton']").click()
                await page.waitForTimeout(5000)
                await page.locator("//input[@placeholder='Search Your Product Here']").clear()
                await page.locator("//input[@placeholder='Search Your Product Here']").fill("Cable")
                await page.locator("//button[@name='searchButton']").click()
                await page.waitForTimeout(5000)
})

