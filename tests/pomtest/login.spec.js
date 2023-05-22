const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/Login.page');
const { SearchPage } = require('../pages/Search.page');


test.beforeEach(async ({ page }) => {
    await page.goto("https://testing.ui.plentyz.pk/login")
  })


test.skip('Login', async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.enterEmail("tanveersalim24@gmail.com")
    await loginpage.enterPassword("Admin@12")
    await loginpage.clickLogin()
});

test.skip('Search', async ({ page }) => {
  const search = new SearchPage(page);
  await search.selectcategory("Beauty & Grooming")
  await search.searchproducts("cream")
  await search.searchbutton()
});