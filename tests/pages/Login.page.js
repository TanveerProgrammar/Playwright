const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.email = page.locator("//input[@name='email']");
      this.password = page.locator("//input[@name='password']");
      this.loginButton = page.locator("//button[@name='Login']")
    }
   
    async enterEmail(email) {
      await this.email.fill(email)
    }
  
  
    async enterPassword(password) {
      await this.password.fill(password)
    }
  
  
    async clickLogin() {
      await this.loginButton.click()
    }
  }