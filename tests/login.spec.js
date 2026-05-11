const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// ─── Test Data ────────────────────────────────────────────
const VALID_USERNAME     = 'standard_user';
const VALID_PASSWORD     = 'secret_sauce';
const INCORRECT_PASSWORD = 'wrong_password';
const MAX_CHAR_PASSWORD  = 'A'.repeat(256);
const SQL_INJECTION      = "' OR 1=1 --";

// ─────────────────────────────────────────────────────────

test.describe('Login Page Tests', () => {

  // AUTH-POS-001 | Login with valid credentials
  test('AUTH-POS-001 - Verify that a user can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Precondition: Open login page
    await loginPage.openLoginPage();

    // Step 1 & 2: Click and type in username field
    await loginPage.enterUsername(VALID_USERNAME);

    // Step 3 & 4: Click and type in password field
    await loginPage.enterPassword(VALID_PASSWORD);

    // Step 5: Click login button
    await loginPage.clickLoginBtn();

    // Expected Result: Will redirect to dashboard
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  // TC-02 | Login fails with incorrect password
  test('TC-02 - Verify that login fails with an incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Precondition: Open login page
    await loginPage.openLoginPage();

    // Step 1: Enter valid username
    await loginPage.enterUsername(VALID_USERNAME);

    // Step 2: Enter incorrect password
    await loginPage.enterPassword(INCORRECT_PASSWORD);

    // Step 3: Login button click
    await loginPage.clickLoginBtn();

    // Expected Result 1: Error message will be shown
    const errorVisible = await loginPage.isErrorVisible();
    expect(errorVisible).toBe(true);

    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username and password do not match');

    // Close error dialog
    await loginPage.closeErrorDialog();

    // Expected Result 2: Will stay on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  // TC-03 | Login fails with empty fields
  test('TC-03 - Verify that login fails with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Precondition: Open login page
    await loginPage.openLoginPage();

    // Step 1 & 2: Without entering anything in any field
    // Step 3: Login button click
    await loginPage.clickLoginBtn();

    // Expected Result 1: Username required error will be shown
    const errorVisible = await loginPage.isErrorVisible();
    expect(errorVisible).toBe(true);

    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username is required');

    // Close error dialog
    await loginPage.closeErrorDialog();

    // Will stay on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  // TC-04 | App remains stable with 256+ character password
  test('TC-04 - Verify password field handles maximum character limits', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Precondition: Open login page
    await loginPage.openLoginPage();

    // Step 1: Enter valid username
    await loginPage.enterUsername(VALID_USERNAME);

    // Step 2: Enter 256+ character password
    await loginPage.enterPassword(MAX_CHAR_PASSWORD);

    // Step 3: Login button click
    await loginPage.clickLoginBtn();

    // Expected Result 1: App will remain stable, no 500 error
    await expect(page).not.toHaveURL(/500|error/);

    // Expected Result 2: Error message will be shown or will stay on login page
    const errorVisible = await loginPage.isErrorVisible();
    expect(errorVisible).toBe(true);

    // Close error dialog
    await loginPage.closeErrorDialog();
  });

  // TC-05 | SQL Injection will not allow unauthorized access
  test('TC-05 - Verify login resilience against SQL Injection strings', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Precondition: Open login page
    await loginPage.openLoginPage();

    // Step 1: Enter SQL Injection string in username field
    await loginPage.enterUsername(SQL_INJECTION);

    // Step 2: Enter password
    await loginPage.enterPassword('password123');

    // Step 3: Login button click
    await loginPage.clickLoginBtn();

    // Expected Result 1: Login will fail, will not go to dashboard
    await expect(page).not.toHaveURL(/inventory/);

    // Expected Result 2: Error message will be shown
    const errorVisible = await loginPage.isErrorVisible();
    expect(errorVisible).toBe(true);

    // Close error dialog
    await loginPage.closeErrorDialog();

    // Will stay on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

});
