const { expect } = require('@playwright/test');

exports.SearchPage = class SearchPage {
    constructor(page) {
      this.page = page;
      this.category = page.locator("//select[@name='categoryId']");
      this.searchproduct = page.locator("//input[@placeholder='Search Your Product Here']");
      this.searchbtn = page.locator("//button[@name='searchButton']")
    }
    async selectcategory(selectycategory) {
        await this.category.selectOption(selectycategory)
      }
    
    
      async searchproducts(searchproducts) {
        await this.searchproduct.fill(searchproducts)
      }
    
    
      async searchbutton() {
        await this.searchbtn.click()
      }
    
}