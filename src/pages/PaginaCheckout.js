class PaginaCheckout {
  constructor(page) {
    this.page = page;
    this.selectors = {
      firstName: '#first-name',
      lastName: '#last-name',
      postalCode: '#postal-code',
      continueBtn: '#continue',
      finishBtn: '#finish',
      confirmation: '.complete-header'
    };
  }

  async fillInformation() {
    await this.page.fill(this.selectors.firstName, 'Test');
    await this.page.fill(this.selectors.lastName, 'User');
    await this.page.fill(this.selectors.postalCode, '12345');
    await this.page.click(this.selectors.continueBtn);
  }

  async finish() {
    await this.page.click(this.selectors.finishBtn);
  }

  async isConfirmationVisible() {
    try {
      return await this.page.isVisible(this.selectors.confirmation);
    } catch (e) {
      return false;
    }
  }
}

module.exports = PaginaCheckout;
