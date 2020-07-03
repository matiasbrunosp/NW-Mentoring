module.exports = {
    elements: {
        usrDescription: '[data-testid="UserDescription"]'
    },

    commands: {
        waitForUserDescription() {
            this.waitForElementVisible(this.elements.usrDescription);
        }
    }
}