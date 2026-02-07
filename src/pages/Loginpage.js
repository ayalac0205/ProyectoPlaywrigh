class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
    this.selectors = {
      username: '#user-name',
      password: '#password',
      loginButton: '#login-button',
      error: '[data-test="error"]'
    };
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(username, password) {
    await this.page.fill(this.selectors.username, username);
    await this.page.fill(this.selectors.password, password);
    await this.page.click(this.selectors.loginButton);
  }

  async getErrorText() {
    if (await this.page.isVisible(this.selectors.error)) {
      return this.page.textContent(this.selectors.error);
    }
    return '';
  }
}

module.exports = LoginPage;
