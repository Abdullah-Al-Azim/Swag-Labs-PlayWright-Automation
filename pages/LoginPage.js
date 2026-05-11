const { Actions } = require('../utils/Actions');

class LoginPage extends Actions {
  constructor(page) {
    super(page);

    // ─── Locators ─────────────────────────────────────────
    this.username    = page.getByTestId('username');
    this.password    = page.getByTestId('password');
    this.loginBtn    = page.getByTestId('login-button');
    this.errorDialog = page.getByTestId('error-button');
  }

  // ─── Open Login Page ──────────────────────────────────────
  async openLoginPage() {
    await this.goto('https://www.saucedemo.com/');
  }

  // ─── Enter Username ───────────────────────────────────────
  async enterUsername(username) {
    await this.fill(this.username, username);
  }

  // ─── Enter Password ───────────────────────────────────────
  async enterPassword(password) {
    await this.fill(this.password, password);
  }

  // ─── Click Login Button ───────────────────────────────────
  async clickLoginBtn() {
    await this.click(this.loginBtn);
  }

  // ─── Get Error Message ────────────────────────────────────
  async getErrorMessage() {
    const errorContainer = this.page.locator('[data-test="error"]');
    return await this.getText(errorContainer);
  }

  // ─── Close Error Dialog ───────────────────────────────────
  async closeErrorDialog() {
    await this.click(this.errorDialog);
  }

  // ─── Is Error Visible ─────────────────────────────────────
  async isErrorVisible() {
    const errorContainer = this.page.locator('[data-test="error"]');
    return await this.isVisible(errorContainer);
  }
}

module.exports = { LoginPage };
