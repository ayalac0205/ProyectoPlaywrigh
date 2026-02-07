class PaginaProductos {
  constructor(page) {
    this.page = page;
    this.selectors = {
      inventoryList: '.inventory_list',
      title: '.title'
    };
  }

  async isVisible() {
    try {
      return await this.page.isVisible(this.selectors.inventoryList);
    } catch (e) {
      return false;
    }
  }

  async getTitle() {
    try {
      return await this.page.textContent(this.selectors.title);
    } catch (e) {
      return '';
    }
  }
}

module.exports = PaginaProductos;
