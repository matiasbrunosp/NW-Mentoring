module.exports = {
    elements: {
        listsTitle: {
            selector: '//span[text()="Lists"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        isListsTitleDisplayed() {
            return this.waitForElementVisible(this.elements.listsTitle);
        }
    }]
};