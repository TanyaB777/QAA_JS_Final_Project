const { Given, When, Then } = require('@cucumber/cucumber');
const {page} = require("../po/pages");  

Given('I open the {string} page', async (pageName) => {
    await page(pageName).open();
});

When('I type {string} and {string} into the login fields', async (username, password) => {
    await page('login').login.input('username').setValue(username);
    await page('login').login.input('password').setValue(password);
});

When('I clear the username input', async () => {
    await page('login').login.clearUserNameInput();
});

When('I clear the password input', async () => {
    await page('login').login.clearPasswordInput();
});

When('I click the "Login" button', async () => {
    await page('login').login.loginButton.click();
});

Then('I should see the error message {string}', async (message) => {
    const errorMessage =  await page('login').login.errorMessage;
    await expect(errorMessage).toHaveText(expect.stringContaining(message));
});

Then('I should see the dashboard title {string}', async (dashboardTitle) => {
    const appLogo = await page("inventory").header.appLogo;
    await expect(appLogo).toHaveText(dashboardTitle);
});