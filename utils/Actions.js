class Actions {
  constructor(page) {
    this.page = page;
  }

  // ─── Navigate to URL ──────────────────────────────────────
  async goto(url) {
    await this.page.goto(url);
  }

  // ─── Click then Type ──────────────────────────────────────
  async fill(locator, text) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
    await locator.fill(text);
  }

  // ─── Click ────────────────────────────────────────────────
  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  // ─── Get Text ─────────────────────────────────────────────
  async getText(locator) {
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }

  // ─── Is Visible ───────────────────────────────────────────
  async isVisible(locator) {
    return await locator.isVisible();
  }

  // ─── Scroll to Bottom ─────────────────────────────────────
  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }
}

module.exports = { Actions };