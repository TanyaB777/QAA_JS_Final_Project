const  {HeaderComponent, FooterComponent} = require("../components");

class BasePage {
    constructor(url) {
        this.url = url;

        this.header = new HeaderComponent();
        this.footer = new FooterComponent();
    }

    async open() {
        await browser.url(this.url);
    }
}

module.exports = BasePage;