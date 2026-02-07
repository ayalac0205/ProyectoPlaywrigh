// features/support/world.js
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async screenshot(name) {
    if (!this.page) {
      throw new Error('Page no inicializada, llama primero a this.init()');
    }
    return await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });
  }
}

setWorldConstructor(CustomWorld);
