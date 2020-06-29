var tweets = require('../data/tweets.json');
module.exports = {
    elements: {
        homeTabBtn: '[data-testid="AppTabBar_Home_Link"]',
        exploreTabBtn: '[data-testid="AppTabBar_Explore_Link"]',
        notificationsTabBtn: '[data-testid="AppTabBar_Notifications_Link"]',
        messagesTabBtn: '[data-testid="AppTabBar_DirectMessage_Link"]',
        bookmarksTabBtn: '[aria-label="Bookmarks"]',
        listsTabBtn: '[aria-label="Lists"]',
        profileTabBtn: '[aria-label="Profile"]',
        moreTabBtn: '[data-testid="AppTabBar_More_Menu"]',
        newTweetTabBtn: '[data-testid="SideNav_NewTweet_Button"]',
        tweetTextArea: '[aria-labelledby="modal-header"] [data-testid="tweetTextarea_0"]',
        sendTweetBtn: '[data-testid="tweetButton"]'
    },

    commands: [{
        clickHome() {
            return this.click(this.elements.homeTabBtn);
        },

        clickExplore() {
            return this.click(this.elements.exploreTabBtn);
        },

        clickNotifications() {
            return this.click(this.elements.notificationsTabBtn);
        },

        clickMessage() {
            return this.click(this.elements.messagesTabBtn);
        },

        clickBookmarks() {
            return this.click(this.elements.bookmarksTabBtn);
        },

        clickLists() {
            return this.click(this.elements.listsTabBtn);
        },

        clickProfile() {
            return this.click(this.elements.profileTabBtn);
        },

        clickMore() {
            return this.click(this.elements.moreTabBtn);
        },

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
    }]
};