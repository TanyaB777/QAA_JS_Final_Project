const BasePage = require("./base.page");
const  {LoginComponent} = require("../components");


class LoginPage extends BasePage {

    constructor() {    
        super("/");
        this.login = new LoginComponent();
        this.header = null;
        this.footer = null;
    }

    get loginLogo() {   
        return $("//div[@class = 'login_logo']");
    }   
}

module.exports = LoginPage;
