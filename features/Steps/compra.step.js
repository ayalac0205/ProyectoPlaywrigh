const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const PaginaProductos = require('../../src/pages/PaginaProductos');
const PaginaCarrito = require('../../src/pages/PaginaCarrito');
const PaginaCheckout = require('../../src/pages/PaginaCheckout');
const PaginaLogin = require('../../src/pages/PaginaLogin');

const PRODUCT_NAME = 'Sauce Labs Backpack';

Given('que inicio sesión con {string} y {string}', async function (user, pass) {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();

  this.productosPage = new PaginaProductos(this.page);
  this.carritoPage = new PaginaCarrito(this.page);
  this.checkoutPage = new PaginaCheckout(this.page);
  this.loginPage = new PaginaLogin(this.page);

  await this.loginPage.goto();
  await this.loginPage.login(user, pass);
});

When('agrego un producto al carrito', async function () {
  await this.page.click(`text=${PRODUCT_NAME}`);
  await this.page.click('button:has-text("Add to cart")');
});

When('voy al carrito', async function () {
  await this.page.click('.shopping_cart_link');
});

Then('debo ver el producto en el carrito', async function () {
  const visible = await this.carritoPage.isProductVisible(PRODUCT_NAME);
  if (!visible) throw new Error('Producto no visible en el carrito');
});

When('completo la compra', async function () {
  await this.carritoPage.checkout();
  await this.checkoutPage.fillInformation();
  await this.checkoutPage.finish();
});

Then('debo ver la confirmación', async function () {
  const ok = await this.checkoutPage.isConfirmationVisible();
  if (!ok) throw new Error('Confirmación no visible');
});
