const{test,expect}=require('@playwright/test')

test.skip("Postive Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/registration")
await page.locator("//input[@name='fullName']").fill("Zainali")
await page.locator("//input[@name='email']").fill("Zainali123456@gmail.com")
await page.locator("//input[@type='tel']").fill("3361122345")
await page.locator("//input[@name='password']").fill("Admin@12")
await page.locator("//input[@name='confirmPassword']").fill("Admin@12")
await page.waitForTimeout(10000)
await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/registration")
    await page.locator("//input[@name='fullName']").fill("123")
    await page.locator("//input[@name='email']").fill("Zainali123456@gmail.com")
    await page.locator("//input[@type='tel']").fill("3361122345")
    await page.locator("//input[@name='password']").fill("Admin@12")
    await page.locator("//input[@name='confirmPassword']").fill("Admin@12")
    await page.waitForTimeout(10000)
    await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
    expect("Please provide valid name").toBeTruthy()
})

test.skip("Negative2 Test Case",async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/registration")
        await page.locator("//input[@name='fullName']").fill("Zainali")
        await page.locator("//input[@name='email']").fill("Zainali123456")
        await page.locator("//input[@type='tel']").fill("3361122345")
        await page.locator("//input[@name='password']").fill("Admin@12")
        await page.locator("//input[@name='confirmPassword']").fill("Admin@12")
        await page.waitForTimeout(10000)
        await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
        expect("Please provide valid email").toBeTruthy()
})

test.skip("Negative3 Test Case",async function({page}){
            await page.goto("https://testing.ui.plentyz.pk/registration")
            await page.locator("//input[@name='fullName']").fill("Zainali")
            await page.locator("//input[@name='email']").fill("Zainali123456@gmail.com")
            await page.locator("//input[@type='tel']").fill("33611223")
            await page.locator("//input[@name='password']").fill("Admin@12")
            await page.locator("//input[@name='confirmPassword']").fill("Admin@12")
            await page.waitForTimeout(10000)
            await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
            expect("Please provide valid phone number").toBeTruthy()
})

            
test.skip("Negative4 Test Case",async function({page}){
                await page.goto("https://testing.ui.plentyz.pk/registration")
                await page.locator("//input[@name='fullName']").fill("Zainali")
                await page.locator("//input[@name='email']").fill("Zainali123456@gmail.com")
                await page.locator("//input[@type='tel']").fill("3361122345")
                await page.locator("//input[@name='password']").fill("Admin@12")
                await page.locator("//input[@name='confirmPassword']").fill("Admin@11")
                await page.waitForTimeout(10000)
                await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
                expect("Confirm Password Doesn't Match").toBeTruthy()
})

                
test.skip("Negative5 Test Case",async function({page}){
                    await page.goto("https://testing.ui.plentyz.pk/registration")
                    await page.locator("//input[@name='fullName']").fill("")
                    await page.locator("//input[@name='email']").fill("")
                    await page.locator("//input[@type='tel']").fill("")
                    await page.locator("//input[@name='password']").fill("")
                    await page.locator("//input[@name='confirmPassword']").fill("")
                    await page.waitForTimeout(10000)
                    await page.locator("//button[@class='style_customBtn__HXt9M rounded-0 btn btn-primary']").click()
                    expect("Please provide valid name").toBeTruthy()
                    expect("Please provide valid email").toBeTruthy()
                    expect("Please provide valid phone number").toBeTruthy()
                    expect("Password is required").toBeTruthy()

})

                    
                    

    