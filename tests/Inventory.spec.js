const { test, expect, chromium } = require('@playwright/test');
const { LoginPage }     = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

// ─── Test Data ────────────────────────────────────────────
const VALID_USERNAME = 'standard_user';
const VALID_PASSWORD = 'secret_sauce';

// ─────────────────────────────────────────────────────────

test.describe('Inventory Page Tests', () => {
  let page;
  let inventoryPage;

  // ✅ Login once — same session for all tests
  test.beforeAll(async ({ browser }) => {
    page          = await browser.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();
    await loginPage.enterUsername(VALID_USERNAME);
    await loginPage.enterPassword(VALID_PASSWORD);
    await loginPage.clickLoginBtn();

    // InventoryPage ready after coming to Dashboard
    inventoryPage = new InventoryPage(page);
  });

  // ─────────────────────────────────────────────────────────

  // TC-01 | Add to Cart
  test('TC-01 - Add to Cart Functionality', async () => {
    // Step 1: Click 'Add to cart' button
    await inventoryPage.click(inventoryPage.addToCartBtn);

    // Expected Result 1: Button text will be 'Remove'
    await expect(inventoryPage.remAddToCartBtn).toBeVisible();

    // Expected Result 2: Cart badge count will be 1
    const badge = await inventoryPage.getText(inventoryPage.addToCartBadge);
    expect(badge).toBe('1');
  });

  // TC-02 | Scrolling Visibility
  test('TC-02 - Scrolling Visibility', async () => {
    // Step 1: Scroll to bottom of page
    await inventoryPage.scrollToBottom();

    // Expected Result 1: All product items are visible
    const productCount = await inventoryPage.allProductItems.count();
    expect(productCount).toBeGreaterThan(0);

    // Expected Result 2: Footer is visible
    await expect(inventoryPage.footer).toBeVisible();
  });

  // TC-03 | Hamburger Menu Open/Close
  test('TC-03 - Hamburger Menu Open and Close', async () => {
    // Step 1: Click hamburger menu
    await inventoryPage.click(inventoryPage.hamburgerMenu);

    // Expected Result 1: Side menu will open
    await expect(inventoryPage.sideMenuList).toBeVisible();

    // Step 2: Click close (X) button
    await inventoryPage.click(inventoryPage.closeSideMenu);

    // Expected Result 2: Side menu will close
    await expect(inventoryPage.sideMenuList).not.toBeVisible();
  });

  // TC-04 | Remove from Cart
  test('TC-04 - Remove from Cart Functionality', async () => {
    // Step 1: Click Add to cart (if already added, remove first)
    const isRemoveVisible = await inventoryPage.isVisible(inventoryPage.remAddToCartBtn);
    if (!isRemoveVisible) {
      await inventoryPage.click(inventoryPage.addToCartBtn);
    }

    // Step 2: Click Remove button
    await inventoryPage.click(inventoryPage.remAddToCartBtn);

    // Expected Result 1: 'Add to cart' button will be visible again
    await expect(inventoryPage.addToCartBtn).toBeVisible();

    // Expected Result 2: Cart badge will disappear
    await expect(inventoryPage.addToCartBadge).not.toBeVisible();
  });

  // TC-05 | Logout Functionality
  test('TC-05 - Logout Functionality', async () => {
    // Step 1: Open hamburger menu
    await inventoryPage.click(inventoryPage.hamburgerMenu);

    // Step 2: Click logout
    await inventoryPage.click(inventoryPage.logoutBtn);

    // Expected Result 1: Will redirect to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Expected Result 2: Cannot access inventory page directly
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});