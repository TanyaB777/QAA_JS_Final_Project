const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
    constructor() {
        super("//div[@id = 'header_container']");
    }

    get appLogo() {
        return this.getRootEl().$("//div[@class = 'app_logo']");
    }

    get burgerMenuButton() { 
        return this.getRootEl().$("//button[@id='react-burger-menu-btn']");
    }

    get shoppingCart() {
        return this.getRootEl().$("//div[@id='shopping_cart_container']");
    }

    get sortingDropdown() {
        return this.getRootEl().$("//select[@class='product_sort_container']");
    }

    get title() {
        return this.getRootEl().$("//span[@class='title']");
    }   
}

module.exports = HeaderComponent;