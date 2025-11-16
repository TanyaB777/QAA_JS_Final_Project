const BaseComponent = require("./base.component");

class FooterComponent extends BaseComponent {
    constructor() {
        super("//footer[@class='footer']");
    }

    /**
     * 
     * @param name {'twitter' | 'facebook' | 'linkedin'}
     * @returns selector for social item
     */
    socialItems(name) {
        const selectors = {
            twitter: "//li[@class='social_twitter']",
            facebook: "//li[@class='social_facebook']",
            linkedin: "//li[@class='social_linkedin']"
        };
        return this.getRootEl().$(selectors[name.toLowerCase()]);
    }

    get copyrightText() {
        return this.getRootEl().$("//div[@class='footer_copy']");
    }
}

module.exports = FooterComponent;