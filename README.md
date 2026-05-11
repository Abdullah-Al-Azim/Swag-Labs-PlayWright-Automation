================================================================================
                    SWAG LABS AUTOMATION FRAMEWORK
                         README DOCUMENTATION
================================================================================

A comprehensive Playwright-based test automation framework for the Swag Labs 
demo e-commerce application. This project implements the Page Object Model (POM) 
pattern and includes automated tests for login functionality and inventory page 
interactions.

================================================================================
TABLE OF CONTENTS
================================================================================

1. Project Overview
2. Tech Stack
3. Project Structure
4. Prerequisites
5. Installation
6. Running Tests
7. Test Cases
8. Project Architecture
9. Configuration
10. Best Practices Implemented
11. Troubleshooting
12. Contributing
13. Future Enhancements
14. License
15. Support

================================================================================
1. PROJECT OVERVIEW
================================================================================

This automation framework tests the Swag Labs demo website 
(https://www.saucedemo.com/) with a focus on:

- Login Functionality: Valid credentials, invalid credentials, empty fields, 
  security (SQL Injection)
- Inventory Page: Add to cart, remove from cart, scrolling, menu navigation, 
  logout functionality

All tests are written in JavaScript using the Playwright testing framework 
with the Page Object Model design pattern for maintainability and reusability.

================================================================================
2. TECH STACK
================================================================================

- Node.js - JavaScript runtime
- Playwright - End-to-end testing framework
- JavaScript (ES6+) - Programming language

================================================================================
3. PROJECT STRUCTURE
================================================================================

swag-labs-automation/
├── pages/                          # Page Object classes
│   ├── LoginPage.js               # Login page object
│   └── InventoryPage.js           # Inventory page object
├── tests/                         # Test files
│   ├── login.spec.js              # Login test cases
│   └── Inventory.spec.js          # Inventory test cases
├── utils/                         # Utility files
│   └── Actions.js                 # Base actions class
├── playwright.config.js           # Playwright configuration
├── package.json                   # Project dependencies
├── .gitignore                     # Git ignore rules
└── README.md                      # Documentation

================================================================================
4. PREREQUISITES
================================================================================

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Basic knowledge of JavaScript and testing concepts

================================================================================
5. INSTALLATION
================================================================================

Step 1: Clone the repository
    Command: git clone <repository-url>
    Command: cd swag-labs-automation

Step 2: Install dependencies
    Command: npm install

This will install:
    - @playwright/test - Playwright testing framework
    - @types/node - TypeScript definitions for Node.js

================================================================================
6. RUNNING TESTS
================================================================================

Run all tests:
    Command: npx playwright test

Run tests in headed mode (see browser):
    Command: npx playwright test --headed

Run tests in UI mode (interactive):
    Command: npx playwright test --ui

Run specific test file:
    Command: npx playwright test tests/login.spec.js

Run tests in debug mode:
    Command: npx playwright test --debug

View test report:
    Command: npx playwright show-report

================================================================================
7. TEST CASES
================================================================================

--- LOGIN TESTS (tests/login.spec.js) ---

Test ID: AUTH-POS-001
Description: Login with valid credentials
Status: PASS

Test ID: TC-02
Description: Login fails with incorrect password
Status: PASS

Test ID: TC-03
Description: Login fails with empty fields
Status: PASS

Test ID: TC-04
Description: Password field handles maximum character limits
Status: PASS

Test ID: TC-05
Description: Login resilience against SQL Injection strings
Status: PASS

--- INVENTORY TESTS (tests/Inventory.spec.js) ---

Test ID: TC-01
Description: Add to Cart Functionality
Status: PASS

Test ID: TC-02
Description: Scrolling Visibility
Status: PASS

Test ID: TC-03
Description: Hamburger Menu Open and Close
Status: PASS

Test ID: TC-04
Description: Remove from Cart Functionality
Status: PASS

Test ID: TC-05
Description: Logout Functionality
Status: PASS

================================================================================
8. PROJECT ARCHITECTURE
================================================================================

--- PAGE OBJECT MODEL (POM) ---

This project follows the Page Object Model design pattern:

- Pages (pages/ directory): Each page/feature is represented by a class that 
  encapsulates the locators and methods related to that page.

- Actions (utils/Actions.js): Base class containing reusable methods for 
  common interactions (click, fill, getText, etc.)

- Tests (tests/ directory): Test cases that use the page objects to interact 
  with the application.

--- FILE DESCRIPTIONS ---

utils/Actions.js
Base class providing common web interactions:
  - goto(url) - Navigate to a URL
  - fill(locator, text) - Click and fill a text field
  - click(locator) - Click an element
  - getText(locator) - Get text from an element
  - isVisible(locator) - Check if element is visible
  - scrollToBottom() - Scroll to bottom of page

pages/LoginPage.js
Login page object with methods:
  - openLoginPage() - Navigate to login page
  - enterUsername(username) - Enter username
  - enterPassword(password) - Enter password
  - clickLoginBtn() - Click login button
  - getErrorMessage() - Get error message
  - closeErrorDialog() - Close error dialog
  - isErrorVisible() - Check if error is visible

pages/InventoryPage.js
Inventory page object with methods for:
  - Adding/removing items from cart
  - Navigating hamburger menu
  - Scrolling and visibility checks
  - Logout functionality

================================================================================
9. CONFIGURATION
================================================================================

--- PLAYWRIGHT CONFIGURATION (playwright.config.js) ---

Key settings:
  - Test Directory: ./tests
  - Reporter: HTML report
  - Trace: Enabled on first retry
  - Parallelization: Tests run in parallel for faster execution
  - Browsers: Chromium (extensible to Firefox, WebKit)

================================================================================
10. BEST PRACTICES IMPLEMENTED
================================================================================

✓ Page Object Model - Maintainable and reusable code
✓ Descriptive Test Names - Clear test descriptions
✓ Assertions - Proper use of expect() assertions
✓ Error Handling - Robust error handling and validation
✓ DRY Principle - Reusable actions in base class
✓ Test Organization - Logical grouping of tests

================================================================================
11. TROUBLESHOOTING
================================================================================

Problem: Tests not running?
Solutions:
  - Ensure Node.js is installed: node --version
  - Ensure npm is installed: npm --version
  - Reinstall dependencies: npm install

Problem: Browser issues?
Solutions:
  - Install Playwright browsers: npx playwright install
  - Check internet connection for demo website access

Problem: Port conflicts?
Solutions:
  - Ensure port 80 and 443 are not blocked (for web access)

================================================================================
12. CONTRIBUTING
================================================================================

1. Create a feature branch
   Command: git checkout -b feature/your-feature

2. Commit your changes
   Command: git commit -am 'Add new feature'

3. Push to the branch
   Command: git push origin feature/your-feature

4. Create a Pull Request

================================================================================
13. FUTURE ENHANCEMENTS
================================================================================

- [ ] Add integration with CI/CD pipeline
- [ ] Implement visual regression testing
- [ ] Add performance testing
- [ ] Expand test coverage to more pages
- [ ] Add API testing
- [ ] Implement data-driven testing

================================================================================
14. LICENSE
================================================================================

ISC

================================================================================
15. SUPPORT
================================================================================

For issues, questions, or suggestions, please create an issue in the 
repository or contact the development team.

================================================================================
                           Happy Testing!
================================================================================

End of Document
