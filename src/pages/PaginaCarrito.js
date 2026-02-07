class PaginaCarrito {
  constructor(page) {
    this.page = page;
    this.selectors = {
      cartList: '.cart_list',
      checkoutBtn: '#checkout'
    };
  }

  async waitForCart() {
    await this.page.waitForSelector(this.selectors.cartList, { timeout: 5000 });
  }

  async isProductVisible(productName) {
    await this.waitForCart();

    const xpath = `xpath=//div[contains(@class,"cart_item")]
      //div[contains(@class,"inventory_item_name") and normalize-space(text())="${productName}"]`;

    try {
      return await this.page.isVisible(xpath);
    } catch (e) {
      return false;
    }
  }

  async checkout() {
    await this.page.click(this.selectors.checkoutBtn);
  }
}

module.exports = PaginaCarrito;
