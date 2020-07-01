const extraCommands = require('../commands/extraCommands');

module.exports = {
    elements: {
        usrDescription: '[data-testid="UserDescription"]'
    },

    commands: [{
        lastTweetIsEqualsTo(string, nightwatch) {
            const tweetContent = '[data-testid="tweet"] div.r-bnwqim';
            nightwatch.waitForElementVisible(tweetContent);
            extraCommands.default.elementByIndexEqualsTo(tweetContent, 0, string, nightwatch);
        }
    }]
};