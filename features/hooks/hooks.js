const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

Before(async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 500 });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (!fs.existsSync('screenshots')) {
    fs.mkdirSync('screenshots');
  }

  const name = scenario.pickle.name.replace(/ /g, '_');
  const path = `screenshots/${name}.png`;

  if (this.page) {
    await this.page.screenshot({ path, fullPage: true });
  }

  await this.context.close();
  await this.browser.close();
});
