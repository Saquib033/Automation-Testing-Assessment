const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Task 1: Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        
        const errorMsg = await $('#login_button_container .error-message-container').getText();
        if (errorMsg.includes("Epic sadface: Sorry, this user has been locked out.")) {
            console.log("Test Passed: Correct error message displayed.");
        } else {
            console.log("Test Failed: Incorrect error message.");
        }
    });
});
describe('Task 2: Cart Operations', () => {
    it('should add item to cart', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await $('.inventory_item').waitForDisplayed();

        const items = await $$('.inventory_item');
        for (let i = 0; i < 3; i++) {
            await items[i].$('button').click();
            await browser.pause(3000);  
        }

        await $('.shopping_cart_link').click();
        await $('#checkout').click();

        await $('#first-name').setValue('Shadman');
        await $('#last-name').setValue('Saquib');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();

        const productNames = await $$('.inventory_item_name');
        for (let product of productNames) {
            console.log(await product.getText());
        }

        const totalPrice = await $('.summary_total_label').getText();
        console.log("Total Price: " + totalPrice);

        await $('#finish').click();

        const successMessage = await $('.complete-header').getText();
        if (successMessage.includes("Thank you for your order!")) {
            console.log("Test Passed: Order completed successfully.");
        } else {
            console.log("Test Failed: Order completion message not found.");
        }
    });
});
describe('Task 3: Checkout Test', () => {
    it('should proceed to checkout successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('performance_glitch_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await browser.pause(3000);

        await $('#react-burger-menu-btn').click();
        await $('#reset_sidebar_link').click();
        await browser.pause(3000);

        await $('.product_sort_container').click();
        await $('option[value="za"]').click();
        await browser.pause(3000);

        const firstProductButton = await $('.inventory_item:first-child button');
        await firstProductButton.click();
        await browser.pause(3000);

        await $('.shopping_cart_link').click();
        await browser.pause(3000);

        await $('#checkout').click();
        await browser.pause(3000);

        await $('#first-name').setValue('Shadman');
        await $('#last-name').setValue('Saquib');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();
        await browser.pause(3000);

        const productNames = await $$('.inventory_item_name');
        for (let product of productNames) {
            console.log(await product.getText());
        }

        const totalPrice = await $('.summary_total_label').getText();
        console.log("Total Price: " + totalPrice);

        await $('#finish').click();
        await browser.pause(3000);

        const successMessage = await $('.complete-header').getText();
        if (successMessage.includes("Thank you for your order!")) {
            console.log("Test Passed: Order completed successfully.");
        } else {
            console.log("Test Failed: Order completion message not found.");
        }

        await $('#react-burger-menu-btn').click();
        await $('#reset_sidebar_link').click();
        await browser.pause(3000);

        await $('#logout_sidebar_link').click();
        await browser.pause(3000);
    });
});
