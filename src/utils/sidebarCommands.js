const _ = require('lodash');

function sidebarCommands(commands) {

    const elements = {
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
    }

    const cmds = {
        clickHome() {
            return this.click(elements.homeTabBtn);
        },

        clickExplore() {
            return this.click(elements.exploreTabBtn);
        },

        clickNotifications() {
            return this.click(elements.notificationsTabBtn);
        },

        clickMessage() {
            return this.click(elements.messagesTabBtn);
        },

        clickBookmarks() {
            return this.click(elements.bookmarksTabBtn);
        },

        clickLists() {
            return this.click(elements.listsTabBtn);
        },

        clickProfile(nightwatch) {
            this.click(elements.profileTabBtn);
            return nightwatch.page.profilePage();
        },

        clickMore() {
            return this.click(elements.moreTabBtn);
        }
    };

    for (const pageCommands of commands) {
        _.assignIn(pageCommands, cmds)
    }
    return commands;
}

exports.default = sidebarCommands;