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
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);

                await page('login').login.loginButton.click();

                const appLogo = await page("inventory").header.appLogo;
                await browser.pause(2000);
                await expect(appLogo).toHaveText(INVENTORY_PAGE_TITLE);
            });
        });
    });

    describe("negative tests", () => {

        invalid_usernames.forEach((username) => {
            it(`should show error with username: ${username} which was cleared along with the password`, async () => {
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);

                await page('login').login.clearUserNameInput();
                await page('login').login.clearPasswordInput();

                await page('login').login.loginButton.click();
        
                const errorMessage =  await page('login').login.errorMessage;
                await expect(errorMessage).toHaveText(expect.stringContaining(EMPTY_USER_MESSAGE));
            });
        });

        invalid_usernames.forEach((username) => {
            it(`should show error with username: ${username} and the password was cleared`, async () => {
                await page('login').login.input('username').setValue(username);
                await page('login').login.input('password').setValue(password);

                await page('login').login.clearPasswordInput();

                await page('login').login.loginButton.click();

                const errorMessage =  await page('login').login.errorMessage;
                await expect(errorMessage).toHaveText(expect.stringContaining(EMPTY_PASSWORD_MESSAGE));
            });
        });
    });
});
