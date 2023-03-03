const{test,expect}=require('@playwright/test')

test.skip("Postive Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/login")
await page.locator("//input[@name='email']").type("tanveersalim24@gmail.com")
await page.locator("//input[@name='password']").type("Admin@12")
await page.locator("//button[@name='Login']").click()
await page.waitForTimeout(5000)
await page.locator("//span[text()='Fffff']").click()
await page.waitForTimeout(2000)
await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
await page.waitForTimeout(5000)
})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    await page.locator("//input[@name='email']").type("tanveersalim")
    await page.locator("//input[@name='password']").type("Admin@12")
    await page.locator("//button[@name='Login']").click()
    expect("Please provide valid email").toBeTruthy()
    await page.waitForTimeout(5000)
    /*await page.locator("//span[text()='Fffff']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
    await page.waitForTimeout(5000)*/
})
    
test.skip("Negative2 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    await page.locator("//input[@name='email']").type("tanveersalim24@gmail.com")
    await page.locator("//input[@name='password']").type("Admin@1")
    await page.locator("//button[@name='Login']").click()
    expect("Wrong password. Try again or click Forgot password to reset it.").toBeTruthy()
    await page.waitForTimeout(5000)
    /*await page.locator("//span[text()='Fffff']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
    await page.waitForTimeout(5000)*/
})

    
test.skip("Negative3 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/login")
    await page.locator("//input[@name='email']").type("tanveersalim@gmail.com")
    await page.locator("//input[@name='password']").type("Admin@12")
    await page.locator("//button[@name='Login']").click()
    expect("Couldn't find your Account").toBeTruthy()
    await page.waitForTimeout(5000)
    
    /*await page.locator("//span[text()='Fffff']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
    await page.waitForTimeout(5000)*/
})

test.skip("Negative4 Test Case",async function({page}){
        await page.goto("https://testing.ui.plentyz.pk/login")
        await page.locator("//input[@name='email']").type("")
        await page.locator("//input[@name='password']").type("")
        await page.locator("//button[@name='Login']").click()
        expect("Please provide valid email").toBeTruthy()
        expect("Please enter a password").toBeTruthy()
        await page.waitForTimeout(5000)
        
        /*await page.locator("//span[text()='Fffff']").click()
        await page.waitForTimeout(2000)
        await page.locator("//*[local-name()='svg' and @class='svg-inline--fa fa-right-from-bracket fa-1x navbar-toggler-icon mr-2']").click()
        await page.waitForTimeout(5000)*/
})