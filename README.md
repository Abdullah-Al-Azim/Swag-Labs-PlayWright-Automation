# Swag Labs Automation

A comprehensive **Playwright-based test automation framework** for the Swag Labs demo e-commerce application. This project implements the Page Object Model (POM) pattern and includes automated tests for login functionality and inventory page interactions.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This automation framework tests the Swag Labs demo website (https://www.saucedemo.com/) with a focus on:

- **Login Functionality**: Valid credentials, invalid credentials, empty fields, security (SQL Injection)
- **Inventory Page**: Add to cart, remove from cart, scrolling, menu navigation, logout functionality

All tests are written in JavaScript using the Playwright testing framework with the Page Object Model design pattern for maintainability and reusability.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Playwright** - End-to-end testing framework
- **JavaScript (ES6+)** - Programming language

## Project Structure
swag-labs-automation/
├── pages/ # Page Object classes
│ ├── LoginPage.js # Login page object
│ └── InventoryPage.js # Inventory page object
├── tests/ # Test files
│ ├── login.spec.js # Login test cases
│ └── Inventory.spec.js # Inventory test cases
├── utils/ # Utility files
│ └── Actions.js # Base actions class for common operations
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies
├── .gitignore # Git ignore rules
└── README.md # This file

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- Basic knowledge of JavaScript and testing concepts

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swag-labs-automation
2. Install dependencies
   npm install
This will install:

@playwright/test - Playwright testing framework
@types/node - TypeScript definitions for Node.js
Running Tests
Run all tests
npx playwright test
Run tests in headed mode (see browser)
npx playwright test --headed
Run tests in UI mode (interactive)
npx playwright test --ui
Run specific test file
npx playwright test tests/login.spec.js
Run tests in debug mode
npx playwright test --debug
View test report
npx playwright show-report
Test Cases
Login Tests (login.spec.js)
Test ID	Description	Status
AUTH-POS-001	Login with valid credentials	✅
TC-02	Login fails with incorrect password	✅
TC-03	Login fails with empty fields	✅
TC-04	Password field handles maximum character limits	✅
TC-05	Login resilience against SQL Injection strings	✅
Inventory Tests (Inventory.spec.js)
Test ID	Description	Status
TC-01	Add to Cart Functionality	✅
TC-02	Scrolling Visibility	✅
TC-03	Hamburger Menu Open and Close	✅
TC-04	Remove from Cart Functionality	✅
TC-05	Logout Functionality	✅
Project Architecture
Page Object Model (POM)
This project follows the Page Object Model design pattern:

Pages (pages directory): Each page/feature is represented by a class that encapsulates the locators and methods related to that page.
Actions (Actions.js): Base class containing reusable methods for common interactions (click, fill, getText, etc.)
Tests (tests directory): Test cases that use the page objects to interact with the application.
File Descriptions
Actions.js
Base class providing common web interactions:

goto(url) - Navigate to a URL
fill(locator, text) - Click and fill a text field
click(locator) - Click an element
getText(locator) - Get text from an element
isVisible(locator) - Check if element is visible
scrollToBottom() - Scroll to bottom of page
LoginPage.js
Login page object with methods:

openLoginPage() - Navigate to login page
enterUsername(username) - Enter username
enterPassword(password) - Enter password
clickLoginBtn() - Click login button
getErrorMessage() - Get error message
closeErrorDialog() - Close error dialog
isErrorVisible() - Check if error is visible
InventoryPage.js
Inventory page object with methods for:

Adding/removing items from cart
Navigating hamburger menu
Scrolling and visibility checks
Logout functionality
Configuration
Playwright Configuration (playwright.config.js)
Key settings:

Test Directory: tests
Reporter: HTML report
Trace: Enabled on first retry
Parallelization: Tests run in parallel for faster execution
Browsers: Chromium (extensible to Firefox, WebKit)
Best Practices Implemented
✅ Page Object Model - Maintainable and reusable code
✅ Descriptive Test Names - Clear test descriptions
✅ Assertions - Proper use of expect() assertions
✅ Error Handling - Robust error handling and validation
✅ DRY Principle - Reusable actions in base class
✅ Test Organization - Logical grouping of tests

Troubleshooting
Tests not running?
Ensure Node.js is installed: node --version
Ensure npm is installed: npm --version
Reinstall dependencies: npm install
Browser issues?
Install Playwright browsers: npx playwright install
Check internet connection for demo website access
Port conflicts?
Ensure port 80 and 443 are not blocked (for web access)
Contributing
Create a feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/your-feature)
Create a Pull Request
Future Enhancements
 Add integration with CI/CD pipeline
 Implement visual regression testing
 Add performance testing
 Expand test coverage to more pages
 Add API testing
 Implement data-driven testing
License
ISC

Support
For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

Happy Testing! 🚀
