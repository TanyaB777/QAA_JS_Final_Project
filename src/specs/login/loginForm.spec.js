/**
 * Login form tests for Swag Labs application.
 * 
 * Positive tests:
 * - Verify that valid usernames can log in successfully.
 * 
 * Negative tests:
 * - Verify that invalid usernames show correct error messages
 *   when inputs are cleared.
 *  
 */

const allure = require('@wdio/allure-reporter').default;
const {page} = require("../../po/pages");  
const {valid_usernames, invalid_usernames, password} = require("../../data/credentials");

const INVENTORY_PAGE_TITLE = "Swag Labs";
const EMPTY_USER_MESSAGE = "Username is required";
const EMPTY_PASSWORD_MESSAGE = "Password is required";

describe("Login form", () => {

    beforeEach(async () => {
        await page('login').open();
    });

    describe("positive tests", () => {
        
        valid_usernames.forEach((username) => {
            it(`should login successfully with username: ${username}`, async () => {
                allure.startStep("Enter username and password into the login fields");
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);
                allure.endStep();

                allure.startStep("Click login button");
                await page('login').login.loginButton.click();
                allure.endStep();

                allure.startStep("Verify inventory page is displayed");
                const appLogo = await page("inventory").header.appLogo;
                await expect(appLogo).toHaveText(INVENTORY_PAGE_TITLE);
                allure.endStep();
            });
        });
    });

    describe("negative tests", () => {

        invalid_usernames.forEach((username) => {
            it(`should show error with username: ${username} which was cleared along with the password`, async () => {
                allure.startStep("Enter username and password into the login fields");
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);
                allure.endStep();

                allure.startStep("Clear username");
                await page('login').login.clearUserNameInput();
                allure.endStep();

                allure.startStep("Clear password");
                await page('login').login.clearPasswordInput();
                allure.endStep();

                allure.startStep("Click login button");
                await page('login').login.loginButton.click();
                allure.endStep();
        
                allure.startStep("Verify error message for empty username");
                const errorMessage =  await page('login').login.errorMessage;
                await expect(errorMessage).toHaveText(expect.stringContaining(EMPTY_USER_MESSAGE));
                allure.endStep();
            });
        });

        invalid_usernames.forEach((username) => {
            it(`should show error with username: ${username} and the password was cleared`, async () => {
                allure.startStep("Enter username and password into the login fields");
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);
                allure.endStep();

                allure.startStep("Clear password");
                await page('login').login.clearPasswordInput();
                allure.endStep();

                allure.startStep("Click login button");
                await page('login').login.loginButton.click();
                allure.endStep();

                allure.startStep("Verify error message for empty password");
                const errorMessage =  await page('login').login.errorMessage;
                await expect(errorMessage).toHaveText(expect.stringContaining(EMPTY_PASSWORD_MESSAGE));
                allure.endStep();
            });
        });
    });
});
