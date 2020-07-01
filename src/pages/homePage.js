const tweets = require('../data/tweets.json');
const sidebarCommands = require('../utils/sidebarCommands');
const extraCommands = require('../commands/extraCommands');

module.exports = {
    elements: {
        newTweetTabBtn: '[data-testid="SideNav_NewTweet_Button"]',
        tweetTextArea: '[aria-labelledby="modal-header"] [data-testid="tweetTextarea_0"]',
        sendTweetBtn: '[data-testid="tweetButton"]',
        tweetSentAlert: '[data-testid="toast"]',
        homeTimeline: '[aria-label="Timeline: Your Home Timeline"]'
    },

    commands: sidebarCommands.default([{
        clickNewTweet() {
            return this.click(this.elements.newTweetTabBtn);
        },

        sendTweet() {
            return this.click(this.elements.sendTweetBtn);
        },

        setTweet(random, tweet) {
            if (!tweet) tweet = tweets[['e' + [random]]];
            random = extraCommands.default.setRandom(500);
            tweet = 'Fun Fact #' + random + ': ' + tweet;
            return this.setValue(this.elements.tweetTextArea, tweet);
        },

        isHomeTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.homeTimeline);
        }
    }])
};