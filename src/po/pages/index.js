const LoginPage = require('./login.page');
const InventoryPage = require('./inventory.page');

/**
 * Returns a page object by its name.
 * Uses a closure to ensure that each page instance is created only once.
 * @param {'login' | 'inventory'} name - The name of the page to retrieve.
 * @returns {LoginPage | InventoryPage} The corresponding page object instance.
 */
const page = (() => {
    const pages = {
        login: new LoginPage(),
        inventory: new InventoryPage()
    };

    return (name) => {return pages[name.toLowerCase()];};
})();

module.exports = { page, LoginPage, InventoryPage };