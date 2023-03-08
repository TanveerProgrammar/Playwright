const{test,expect}=require("@playwright/test")

test.skip("Search word1",async function({page}){
await page.goto("https://testing.ui.plentyz.pk/")
const category=page.locator("//select[@name='categoryId']")
const searchproduct=page.locator("//input[@placeholder='Search Your Product Here']")
const searchbtn=page.locator("//button[@name='searchButton']")
await category.selectOption("Beauty & Grooming")
await searchproduct.fill("Cream")
await searchbtn.click()
await page.waitForTimeout(5000)

})

test.skip("Search word2",async function({page}){

await page.goto("https://testing.ui.plentyz.pk/")
const category=page.locator("//select[@name='categoryId']")
const searchproduct=page.locator("//input[@placeholder='Search Your Product Here']")
const searchbtn=page.locator("//button[@name='searchButton']")
await category.selectOption("Home & Lifestyle")
await searchproduct.fill("Microwave")
await searchbtn.click()
await page.waitForTimeout(5000)
    
})

test.skip("Search word3",async function({page}){
       
await page.goto("https://testing.ui.plentyz.pk/")
const category=page.locator("//select[@name='categoryId']")
const searchproduct=page.locator("//input[@placeholder='Search Your Product Here']")
const searchbtn=page.locator("//button[@name='searchButton']")
await category.selectOption("Mobile & Tablets")
await searchproduct.fill("Cable")
await searchbtn.click()
await page.waitForTimeout(5000)
        
})

test.skip("Search word4",async function({page}){

await page.goto("https://testing.ui.plentyz.pk/")
const category=page.locator("//select[@name='categoryId']")
const searchproduct=page.locator("//input[@placeholder='Search Your Product Here']")
const searchbtn=page.locator("//button[@name='searchButton']")
await category.selectOption("Computing")
await searchproduct.fill("Computer")
await searchbtn.click()
await page.waitForTimeout(5000)
            
})
            
test.skip("Search word5",async function({page}){

await page.goto("https://testing.ui.plentyz.pk/")
const category=page.locator("//select[@name='categoryId']")
const searchproduct=page.locator("//input[@placeholder='Search Your Product Here']")
const searchbtn=page.locator("//button[@name='searchButton']")
await category.selectOption("Mobile & Tablets")
await searchproduct.fill("Power Bank")
await searchbtn.click()
await page.waitForTimeout(5000)
await searchproduct.clear()
await searchproduct.fill("Cable")
await searchbtn.click()
await page.waitForTimeout(5000)
})

