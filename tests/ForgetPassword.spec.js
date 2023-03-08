const{test,expect}=require('@playwright/test')

test.skip("Postive Test Case",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/username-recovery")
const email=page.locator("//input[@name='email']")
const forgetpasswordbtn=page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']")
await email.fill("tanveersalim24@gmail.com")
await forgetpasswordbtn.click()
})

test.skip("Negative1 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/username-recovery")
    const email=page.locator("//input[@name='email']")
    const forgetpasswordbtn=page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']")
    const emailerrormessage=page.locator("//form[@class='was-validated']//div[@class='invalid-feedback'][normalize-space()='Please provide valid email']")
    await email.fill("")
    await forgetpasswordbtn.click()
    await expect.soft(emailerrormessage).toContainText("Please provide email")
})

test.skip("Negative2 Test Case",async function({page}){
    await page.goto("https://testing.ui.plentyz.pk/username-recovery")
    const email=page.locator("//input[@name='email']")
    const forgetpasswordbtn=page.locator("//button[@class='style_customBtn1__dFa35 btn btn-primary btn-block']")
    const emailerrormessage=page.locator("//form[@class='was-validated']//div[@class='invalid-feedback'][normalize-space()='Please provide valid email']")
    await email.fill("tanveersalim")
    await forgetpasswordbtn.click()
    await expect.soft(emailerrormessage).toContainText("Please provide valid email")
})

