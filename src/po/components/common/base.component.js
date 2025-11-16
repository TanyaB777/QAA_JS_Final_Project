class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }
    
    getRootEl() {
        return $(this.rootSelector);
   }
}

module.exports = BaseComponent;