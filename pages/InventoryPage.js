const { Actions } = require('../utils/Actions');

class InventoryPage extends Actions {
  constructor(page) {
    super(page);

    // ─── Locators ─────────────────────────────────────────
    this.addToCartBtn    = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.remAddToCartBtn = page.locator("//button[@id='remove-sauce-labs-backpack']");
    this.addToCartIcon   = page.locator("//a[@class='shopping_cart_link']");
    this.addToCartBadge  = page.locator("//span[@class='shopping_cart_badge']");
    this.hamburgerMenu   = page.locator("//button[@id='react-burger-menu-btn']");
    this.logoutBtn       = page.locator("//a[@id='logout_sidebar_link']");
    this.closeSideMenu   = page.locator("//button[@id='react-burger-cross-btn']");

    // ─── Footer & Menu Locators ───────────────────────────
    this.footer          = page.locator("//footer[@class='footer']");
    this.allProductItems = page.locator("//div[@class='inventory_item']");
    this.sideMenuList    = page.locator("//nav[@class='bm-item-list']");
  }
}

module.exports = { InventoryPage };