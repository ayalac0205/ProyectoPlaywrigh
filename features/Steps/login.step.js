const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');
const PaginaLogin = require('../../src/pages/PaginaLogin');
const PaginaProductos = require('../../src/pages/PaginaProductos');

let browser;
let page;
let loginPage;
let productsPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new PaginaLogin(page);
  productsPage = new PaginaProductos(page);
});

After(async function () {
  if (page) await page.close();
  if (browser) await browser.close();
});

Given('que abro la página de inicio de sesión', async function () {
  await loginPage.goto();
});

When('inicio sesión con {string} y {string}', async function (usuario, contraseña) {
  await loginPage.login(usuario, contraseña);
});

Then('debo ver la página de productos', async function () {
  const visible = await productsPage.isVisible();
  assert.ok(visible, 'La página de productos no está visible');
});

Then('debo ver un mensaje de error', async function () {
  const texto = await loginPage.getErrorText();
  assert.ok(texto && texto.length > 0, 'Se esperaba un mensaje de error');
});
