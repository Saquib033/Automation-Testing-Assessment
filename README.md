# Automation Testing Assessment for Saucedemo Website
=====================================================
# Overview

This repository contains automation test scripts for the Saucedemo website. The tests cover three key scenarios related to login functionality, cart operations, checkout, and order completion. The following scenarios are tested:

1. Login with locked_out_user and verify the error message.
2. Login with standard_user, reset the app state, add three items to the cart, complete the checkout, and verify the order.
3. Login with performance_glitch_user, filter products by name (Z to A), add the first product to the cart, complete the checkout, and verify the order.

The test scripts are written in JavaScript using Selenium WebDriver and Node.js. The tests are run in Firefox browser, but you can easily modify the script for other browsers.

# Technologies Used
1. js
2. Selenium WebDriver
3. JavaScript
4. GitHub for version control
5. Firefox (or other browsers)
# Features


# Login Test:

Login with different users (locked_out_user, standard_user, performance_glitch_user).
Verify error messages or success messages based on login credentials.


# Cart and Checkout Test:

Add multiple items to the cart.
Verify the products in the cart and the total price.
Complete the purchase and verify the success message.
Reset app state after each test.


# Error Handling and Reporting:

All tests are handled with proper error handling.
A report is generated after each execution, showing test results and logs.

# GitHub Integration:

Test scripts are stored and version-controlled in a public GitHub repository.
You can access and clone the repository to run tests locally.
# How to Run the Tests

# Prerequisites:

# Install Node.js: 

Download and install Node.js 


# Install WebDriver: 

You will need the Firefox WebDriver for Selenium. You can download the necessary driver.

# Clone the Repository: 

Use Git to clone this repository to your local machine:

bash
Copy
Edit
git clone : https://github.com/Saquib033/Automation-Testing-Assessment
Install Dependencies: Navigate to the project directory and install the required packages:
bash
Copy
Edit
cd saucedemo-automation-testing
npm install
Running the Tests:
Once the dependencies are installed, you can run the test scripts. There are three separate tests as described in the assessment. The tests can be run individually or sequentially.

Run All Tests Sequentially:

bash
Copy
Edit
npm run all-tests
Run Specific Tests:

Test 1: Login with locked_out_user and verify the error message:
bash
Copy
Edit
npm run test1
Test 2: Login with standard_user, reset app state, add 3 items to cart, proceed to checkout, and verify the order:
bash
Copy
Edit
npm run test2
Test 3: Login with performance_glitch_user, filter products, add to cart, proceed to checkout, and verify the order:
bash
Copy
Edit
npm run test3
Generating Reports:
Each test will generate a report after execution, which can be found in the reports/ directory of the repository.

How to Reset App State:
After logging in and completing actions, the app state is reset using the Hamburger Menu. This ensures that each test starts from a fresh state.
Test Scenarios
Test 1: Login with locked_out_user
Attempt to login with the locked_out_user and verify the error message displayed.
Test 2: Login with standard_user, Add Items to Cart, Checkout
Login with standard_user.
Reset App State from the hamburger menu.
Add three items to the cart.
Proceed to checkout and verify the product names and total price.
Complete the purchase and verify the success message.
Reset App State and log out.
Test 3: Login with performance_glitch_user, Filter Products, Add to Cart, Checkout
Login with performance_glitch_user.
Reset App State.
Filter products by name in Z-A order.
Add the first product to the cart.
Proceed to checkout and verify the product names and total price.
Complete the purchase and verify the success message.
Reset App State and log out.
Directory Structure
bash
Copy
Edit
saucedemo-automation-testing/
│
├── test/
│   ├── test1.js          # Test for locked_out_user login
│   ├── test2.js          # Test for standard_user login, cart operations, and checkout
│   ├── test3.js          # Test for performance_glitch_user login, filtering, and checkout
│   └── common.js         # Common functions for login, cart operations, etc.
│
├── reports/              # Directory where test execution reports are saved
│
├── package.json          # Project metadata and dependencies
└── README.md             # This file

