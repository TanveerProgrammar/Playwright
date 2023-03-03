const{test,expect}=require("@playwright/test")

test.skip("Postive Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/contact-us")
await page.locator("//input[@name='name']").fill("ali")
await page.locator("//input[@name='email']").fill("rohan@gmail.com")
await page.locator("//textarea[@name='message']").fill("Hi There!")
await page.locator("//button[@class='style_blueCustomBtn__BPQFQ rounded btn btn-primary']").click()
await page.waitForTimeout(3000)

})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/contact-us")
    await page.locator("//input[@name='name']").fill("123")
    await page.locator("//input[@name='email']").fill("rohan@gmail.com")
    await page.locator("//textarea[@name='message']").fill("Hi There!")
    await page.locator("//button[@class='style_blueCustomBtn__BPQFQ rounded btn btn-primary']").click()
    await expect("//h2[text()='Thanks for filling out our form! We will look over your message and get back to you as soon as we can. In the meantime, you can check the']").toContain("Please Enter Valid First Name")
    await page.waitForTimeout(3000)
    
})

test.skip("Negative2 Test Case",async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/contact-us")
        await page.locator("//input[@name='name']").fill("ali")
        await page.locator("//input[@name='email']").fill("rohan")
        await page.locator("//textarea[@name='message']").fill("Hi There!")
        await page.locator("//button[@class='style_blueCustomBtn__BPQFQ rounded btn btn-primary']").click()
        expect("//div[text()='Please provide valid email']").toContain("Please provide valid email")
        await page.waitForTimeout(3000)
        
})

test.skip("Negative3 Test Case",async function({page}){
            await page.goto("https://testing.ui.plentyz.pk/contact-us")
            await page.locator("//input[@name='name']").fill("")
            await page.locator("//input[@name='email']").fill("")
            await page.locator("//textarea[@name='message']").fill("")
            await page.locator("//button[@class='style_blueCustomBtn__BPQFQ rounded btn btn-primary']").click()
            expect("//div[text()='Name is required']").toContain("Name is required")
            expect("//div[text()='Please provide valid Message']").toContain("Please provide valid Message")
            expect("//div[text()='Please provide valid email']").toContain("Please provide valid email")
            await page.waitForTimeout(3000)
            
})