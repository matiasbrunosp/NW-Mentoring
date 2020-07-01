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
        moreTabBtn: '[data-testid="AppTabBar_More_Menu"]'
    }

    const cmds = {
        clickHome() {
            return this.click(elements.homeTabBtn);
        },

        clickExplore(nightwatch) {
            this.click(elements.exploreTabBtn);
            return nightwatch.page.explorePage();
        },

        clickNotifications(nightwatch) {
            this.click(elements.notificationsTabBtn);
            return nightwatch.page.notificationsPage();
        },

        clickMessages(nightwatch) {
            this.click(elements.messagesTabBtn);
            return nightwatch.page.messagesPage();
        },

        clickBookmarks(nightwatch) {
            this.click(elements.bookmarksTabBtn);
            return nightwatch.page.bookmarksPage();
        },

        clickLists(nightwatch) {
            this.click(elements.listsTabBtn);
            return nightwatch.page.listsPage();
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