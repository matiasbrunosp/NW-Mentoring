const tweets = require('../data/tweets.json');
const sidebarCommands = require('../utils/sidebarCommands');

module.exports = {
    elements: {
        newTweetTabBtn: '[data-testid="SideNav_NewTweet_Button"]',
        tweetTextArea: '[aria-labelledby="modal-header"] [data-testid="tweetTextarea_0"]',
        sendTweetBtn: '[data-testid="tweetButton"]'
    },

    commands: sidebarCommands.default([{
        clickNewTweet() {
            return this.click(this.elements.newTweetTabBtn);
        },

        sendTweet() {
            return this.click(this.elements.sendTweetBtn);
        },

        setTweet(tweet) {
            this.clickNewTweet();
            const random = Math.floor((Math.random() * 10) + 1);
            if (!tweet) tweet = tweets[['e' + [random]]];
            this.setValue(this.elements.tweetTextArea, tweet);
            return this.sendTweet();
        }
    }])
};