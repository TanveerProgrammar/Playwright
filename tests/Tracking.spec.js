const{test,expect}=require("@playwright/test")

test.skip("Positive Test Case",async function({page}){

await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
const ordernumber=page.locator("//input[@placeholder='Order Number']")
const email=page.locator("//input[@placeholder='Your Email Address']")
const track=page.locator("//button[@class='rounded-0 btn btn-success btn-block']")
await ordernumber.fill("34499-20230307-44859")
await email.fill("tanveersalim24@gmail.com")
await track.click()
await page.waitForTimeout(3000)

})

test.skip("Negative1 Test Case",async function({page}){

    await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
    const ordernumber=page.locator("//input[@placeholder='Order Number']")
    const email=page.locator("//input[@placeholder='Your Email Address']")
    const track=page.locator("//button[@class='rounded-0 btn btn-success btn-block']")
    await ordernumber.fill("")
    await email.fill("")
    await track.click()
    await expect.soft(ordernumber).toContainText("Please Enter Order Number")
    await expect.soft(email).toContainText("Please Enter Email Address")
    await page.waitForTimeout(3000)
    
    
})

test.skip("Negative2 Test Case",async function({page}){

    await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
    const ordernumber=page.locator("//input[@placeholder='Order Number']")
    const email=page.locator("//input[@placeholder='Your Email Address']")
    const track=page.locator("//button[@class='rounded-0 btn btn-success btn-block']")
    await ordernumber.fill("sdasd")
    await email.fill("adasdads")
    await track.click()
    await expect.soft(ordernumber).toHaveValue(/[0-9-]/)
    await expect.soft(email).toHaveValue(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
    await page.waitForTimeout(3000)
        
})

test.skip("Negative3 Test Case",async function({page}){

    await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
    const ordernumber=page.locator("//input[@placeholder='Order Number']")
    const email=page.locator("//input[@placeholder='Your Email Address']")
    const track=page.locator("//button[@class='rounded-0 btn btn-success btn-block']")
    await ordernumber.fill("34499-20230307-44859")
    await email.fill("tanveersalim24@gmail.com")
    await track.click()
    await expect.soft(ordernumber).toHaveValue(/[0-9-]/)
    await expect.soft(email).toHaveValue(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
    await page.waitForTimeout(3000)
        
})

test.skip("Negative4 Test Case",async function({page}){

    await page.goto("https://testing.ui.plentyz.pk/online-orders-tracking-pakistan")
    const ordernumber=page.locator("//input[@placeholder='Order Number']")
    const email=page.locator("//input[@placeholder='Your Email Address']")
    const track=page.locator("//button[@class='rounded-0 btn btn-success btn-block']")
    await ordernumber.fill("34499-20230307-44859")
    await email.fill("tanveersalim24")
    await track.click()
    await expect.soft(ordernumber).toHaveValue(/[0-9-]/)
    await expect.soft(email).toHaveValue(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
    await page.waitForTimeout(3000)
        
})