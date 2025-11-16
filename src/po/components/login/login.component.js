const BaseComponent = require("../common/base.component");
const { clearElementValue } = require("../../../utils/elementHelpers");

class LoginComponent extends BaseComponent {
    constructor() {
        super("//div[@id = 'login_button_container']");
    }

    /**
     * @param {'username' | 'password'} name
     * @returns {Promise<WebdriverIO.Element>}
     */
    input(name) {
        const selectors = {
            username: "//input[@id='user-name']",
            password: "//input[@id='password']"
        };

        return this.getRootEl().$(selectors[name.toLowerCase()]);
    }

    get loginButton() {
        return this.getRootEl().$("//input[@id = 'login-button']");
    }

    get errorMessage() {
        return this.getRootEl().$("//h3[@data-test = 'error']");
    }

    async clearUserNameInput() {
        await clearElementValue(this.input('username'));
    }

    async clearPasswordInput() {
        await clearElementValue(this.input('password'));
    }

    async login(username, password) {
        await this.input('username').setValue(username);
        await this.input('password').setValue(password);
        await this.loginButton.click();
    }
}

module.exports = LoginComponent;