const extraCommands = require('../commands/extraCommands');

module.exports = {
    elements: {
        usrDescription: '[data-testid="UserDescription"]'
    },

    commands: [{
        lastTweetIsEqualsTo(string, nightwatch) {
            const tweetContent = '[data-testid="tweet"] div.r-bnwqim';
            this.waitForElementVisible(tweetContent);
            extraCommands.default.elementByIndexEqualsTo(tweetContent, 0, string, nightwatch);
        },

        isUserDescriptionDisplayed() {
            return this.waitForElementVisible(this.elements.usrDescription);
        }
    }]
};