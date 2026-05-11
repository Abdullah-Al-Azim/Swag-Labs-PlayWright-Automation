╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                   SWAG LABS AUTOMATION FRAMEWORK                            ║
║                      Playwright Test Automation                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝


OVERVIEW
─────────────────────────────────────────────────────────────────────────────

A comprehensive Playwright-based test automation framework for the Swag Labs 
demo e-commerce application (https://www.saucedemo.com/). 

This project implements:
  • Page Object Model (POM) design pattern
  • Automated login and authentication tests
  • Inventory page interaction tests
  • Reusable action classes
  • Professional test reporting


QUICK START
─────────────────────────────────────────────────────────────────────────────

1. Clone Repository
   $ git clone <repository-url>
   $ cd swag-labs-automation

2. Install Dependencies
   $ npm install

3. Run Tests
   $ npx playwright test

4. View Report
   $ npx playwright show-report


TABLE OF CONTENTS
─────────────────────────────────────────────────────────────────────────────

  1.  Project Overview
  2.  Tech Stack
  3.  Project Structure
  4.  Prerequisites
  5.  Installation & Setup
  6.  Running Tests
  7.  Test Cases
  8.  Project Architecture
  9.  File Descriptions
  10. Configuration
  11. Best Practices
  12. Troubleshooting
  13. Contributing
  14. Future Enhancements
  15. Support & License


1. PROJECT OVERVIEW
─────────────────────────────────────────────────────────────────────────────

This framework provides comprehensive automated testing for the Swag Labs 
e-commerce demo website.

Focus Areas:
  ✓ Login & Authentication
    - Valid credential login
    - Invalid password handling
    - Empty field validation
    - SQL Injection security testing

  ✓ Inventory Management
    - Add to Cart functionality
    - Remove from Cart functionality
    - Product browsing & scrolling
    - Menu navigation
    - Logout functionality


2. TECH STACK
─────────────────────────────────────────────────────────────────────────────

  Language:       JavaScript (ES6+)
  Runtime:        Node.js (v14+)
  Test Framework: Playwright
  Pattern:        Page Object Model (POM)
  Reporting:      HTML Report


3. PROJECT STRUCTURE
─────────────────────────────────────────────────────────────────────────────

swag-labs-automation/
│
├── pages/
│   ├── LoginPage.js              # Login page object with test methods
│   └── InventoryPage.js          # Inventory page object with test methods
│
├── tests/
│   ├── login.spec.js             # Login test cases (5 test cases)
│   └── Inventory.spec.js         # Inventory test cases (5 test cases)
│
├── utils/
│   └── Actions.js                # Base actions class (reusable methods)
│
├── playwright.config.js          # Playwright configuration
├── package.json                  # Project dependencies
├── .gitignore                    # Git ignore rules
└── README.md                     # GitHub documentation


4. PREREQUISITES
─────────────────────────────────────────────────────────────────────────────

  ✓ Node.js version 14 or higher
  ✓ npm (Node Package Manager)
  ✓ Basic JavaScript knowledge
  ✓ Internet connection (for demo website)


5. INSTALLATION & SETUP
─────────────────────────────────────────────────────────────────────────────

STEP 1: Clone the Repository
  $ git clone <repository-url>
  $ cd swag-labs-automation

STEP 2: Install Dependencies
  $ npm install

  This installs:
    • @playwright/test - Playwright testing framework
    • @types/node - TypeScript type definitions

STEP 3: Verify Installation
  $ node --version
  $ npm --version
  $ npx playwright --version


6. RUNNING TESTS
─────────────────────────────────────────────────────────────────────────────

RUN ALL TESTS
  $ npx playwright test

RUN TESTS IN HEADED MODE (see browser)
  $ npx playwright test --headed

RUN TESTS IN UI MODE (interactive dashboard)
  $ npx playwright test --ui

RUN SPECIFIC TEST FILE
  $ npx playwright test tests/login.spec.js

RUN TESTS IN DEBUG MODE
  $ npx playwright test --debug

VIEW TEST REPORT
  $ npx playwright show-report

RUN WITH SPECIFIC BROWSER
  $ npx playwright test --project=chromium


7. TEST CASES
─────────────────────────────────────────────────────────────────────────────

LOGIN TESTS (tests/login.spec.js)
──────────────────────────────────

  Test ID: AUTH-POS-001
  Name: Login with valid credentials
  Status: ✓ PASS
  Description: Verifies user can login with valid credentials

  Test ID: TC-02
  Name: Login fails with incorrect password
  Status: ✓ PASS
  Description: Verifies login fails with wrong password

  Test ID: TC-03
  Name: Login fails with empty fields
  Status: ✓ PASS
  Description: Verifies login requires both username and password

  Test ID: TC-04
  Name: Password field handles maximum character limits
  Status: ✓ PASS
  Description: Verifies app stability with large character input

  Test ID: TC-05
  Name: Login resilience against SQL Injection
  Status: ✓ PASS
  Description: Verifies SQL injection strings are properly handled


INVENTORY TESTS (tests/Inventory.spec.js)
──────────────────────────────────────────

  Test ID: TC-01
  Name: Add to Cart Functionality
  Status: ✓ PASS
  Description: Verifies items can be added to cart

  Test ID: TC-02
  Name: Scrolling Visibility
  Status: ✓ PASS
  Description: Verifies all products visible when scrolling

  Test ID: TC-03
  Name: Hamburger Menu Open and Close
  Status: ✓ PASS
  Description: Verifies side menu opens and closes properly

  Test ID: TC-04
  Name: Remove from Cart Functionality
  Status: ✓ PASS
  Description: Verifies items can be removed from cart

  Test ID: TC-05
  Name: Logout Functionality
  Status: ✓ PASS
  Description: Verifies user can logout and loses access to inventory


8. PROJECT ARCHITECTURE
─────────────────────────────────────────────────────────────────────────────

PAGE OBJECT MODEL (POM) DESIGN
──────────────────────────────

The project follows Page Object Model pattern for maintainability:

  Pages/ Directory
    └─ Contains page object classes
    └─ Encapsulates page locators and methods
    └─ One class per page/feature

  Utils/ Directory
    └─ Contains base Actions class
    └─ Reusable web interaction methods
    └─ Shared by all page objects

  Tests/ Directory
    └─ Contains test specifications
    └─ Uses page objects to interact with app
    └─ Focuses on test logic, not implementation


ARCHITECTURE DIAGRAM
────────────────────

  Tests (login.spec.js, Inventory.spec.js)
         ↓
  Page Objects (LoginPage.js, InventoryPage.js)
         ↓
  Base Actions (Actions.js)
         ↓
  Playwright Browser API


9. FILE DESCRIPTIONS
─────────────────────────────────────────────────────────────────────────────

utils/Actions.js
─────────────────
Base class providing common web interactions (extended by page objects):

  goto(url)
    Navigate to a specific URL

  fill(locator, text)
    Click field, clear it, and type text

  click(locator)
    Wait for element visibility and click

  getText(locator)
    Get text content from an element

  isVisible(locator)
    Check if element is visible on page

  scrollToBottom()
    Scroll to bottom of page

  scrollToTop()
    Scroll to top of page


pages/LoginPage.js
──────────────────
Login page object (extends Actions class):

  Constructor
    - Initializes page locators using getByTestId()
    - Sets up: username, password, login button, error dialog

  openLoginPage()
    Navigate to login page (https://www.saucedemo.com/)

  enterUsername(username)
    Fill username field with provided text

  enterPassword(password)
    Fill password field with provided text

  clickLoginBtn()
    Click the login button

  getErrorMessage()
    Extract error message from error container

  closeErrorDialog()
    Close error dialog by clicking close button

  isErrorVisible()
    Check if error message is visible


pages/InventoryPage.js
──────────────────────
Inventory page object (extends Actions class):

  Provides methods for:
    - Adding items to cart
    - Removing items from cart
    - Navigating hamburger menu
    - Product scrolling and visibility
    - Logout functionality


10. CONFIGURATION
─────────────────────────────────────────────────────────────────────────────

playwright.config.js
─────────────────────

Key Settings:

  testDir: './tests'
    └─ Directory containing test files

  fullyParallel: true
    └─ Run tests in parallel for faster execution

  retries: 0 (local) / 2 (CI)
    └─ Retry failed tests on CI environment

  workers: 1 (CI) / undefined (local)
    └─ Number of parallel workers

  reporter: 'html'
    └─ Generate HTML test report

  trace: 'on-first-retry'
    └─ Capture trace for failed tests

  use:
    ├─ testIdAttribute: 'data-test'
    ├─ trace: 'on-first-retry'
    └─ screenshot: 'only-on-failure'


11. BEST PRACTICES IMPLEMENTED
─────────────────────────────────────────────────────────────────────────────

✓ Page Object Model
  └─ Maintainable and reusable code structure

✓ Descriptive Test Names
  └─ Clear test descriptions indicating what is tested

✓ Proper Assertions
  └─ Using expect() for clear test validation

✓ Error Handling
  └─ Robust error checking and user feedback

✓ DRY Principle
  └─ Reusable methods in base Actions class

✓ Test Organization
  └─ Logical grouping of related tests

✓ Wait Strategies
  └─ Proper waits for element visibility

✓ Test Independence
  └─ Each test can run independently


12. TROUBLESHOOTING
─────────────────────────────────────────────────────────────────────────────

ISSUE: Tests not running
────────────────────────
Solutions:
  1. Verify Node.js: $ node --version
  2. Verify npm: $ npm --version
  3. Reinstall dependencies: $ npm install
  4. Clear cache: $ npm cache clean --force

ISSUE: Browser not found
────────────────────────
Solutions:
  1. Install Playwright browsers: $ npx playwright install
  2. Update Playwright: $ npm install @playwright/test@latest
  3. Check disk space

ISSUE: Tests timeout
────────────────────
Solutions:
  1. Increase timeout in playwright.config.js
  2. Check internet connection to demo website
  3. Verify demo website is accessible (https://www.saucedemo.com/)

ISSUE: Port conflicts
─────────────────────
Solutions:
  1. Ensure ports 80 and 443 are not blocked
  2. Check firewall settings
  3. Run tests with --headed to see actual browser


13. CONTRIBUTING
─────────────────────────────────────────────────────────────────────────────

CONTRIBUTION WORKFLOW
─────────────────────

1. Create Feature Branch
   $ git checkout -b feature/your-feature-name

2. Make Changes
   $ [Make your code changes]

3. Commit Changes
   $ git add .
   $ git commit -m "Add description of changes"

4. Push Branch
   $ git push origin feature/your-feature-name

5. Create Pull Request
   └─ Go to GitHub and create PR

NAMING CONVENTIONS
──────────────────

  Branches: feature/login-enhancements, bugfix/cart-issue
  Commits: "Add login test for locked users"
  PRs: "Add login tests for locked user scenario"


14. FUTURE ENHANCEMENTS
─────────────────────────────────────────────────────────────────────────────

Planned Features:

  [ ] CI/CD Integration (GitHub Actions, Jenkins)
  [ ] Visual Regression Testing
  [ ] Performance Testing
  [ ] Extended Test Coverage
  [ ] API Test Integration
  [ ] Data-Driven Testing
  [ ] Parallel Execution Optimization
  [ ] Custom Reporters
  [ ] Allure Reporting
  [ ] Cross-browser Testing


15. SUPPORT & LICENSE
─────────────────────────────────────────────────────────────────────────────

LICENSE: ISC

SUPPORT
───────

For issues or questions:
  1. Check troubleshooting section
  2. Review test output and logs
  3. Open GitHub issue with:
     - Error message
     - Steps to reproduce
     - Environment details (OS, Node version)

CONTACT
───────

Email: [your-email@example.com]
Repository: [your-repo-url]


─────────────────────────────────────────────────────────────────────────────
                    Happy Testing! 🚀
─────────────────────────────────────────────────────────────────────────────

Document Generated: May 2026
Last Updated: May 11, 2026
Version: 1.0.0
