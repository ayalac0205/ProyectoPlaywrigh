const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const PaginaProductos = require('../../src/pages/PaginaProductos');
const PaginaCarrito = require('../../src/pages/PaginaCarrito');
const PaginaCheckout = require('../../src/pages/PaginaCheckout');
const PaginaLogin = require('../../src/pages/PaginaLogin');


Given('estoy en la página de productos', async function () {
  const visible = await this.productosPage.isVisible();
  if (!visible) {
    throw new Error('No se mostró la página de productos');
  }
});

When('agrego el producto {string} al carrito', async function (product) {
  // click por texto del producto
  await this.page.click(`text=${product}`);

  // botón Add to cart
  await this.page.click('button:has-text("Add to cart")');
});

Then('el producto {string} debe aparecer en el carrito', async function (product) {
  // ir al carrito
  await this.page.click('.shopping_cart_link');
  await this.page.waitForSelector('.cart_list', { timeout: 5000 });

  const xpath = `xpath=//div[contains(@class,"cart_item")]
    //div[contains(@class,"inventory_item_name") and normalize-space(text())="${product}"]`;

  const visible = await this.page.isVisible(xpath).catch(() => false);
  if (!visible) {
    throw new Error(`El producto "${product}" no aparece en el carrito`);
  }

});
