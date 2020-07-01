const tweets = require('../data/tweets.json');
var data = require('../data/data.json');
const extraCommands = require('../commands/extraCommands');

module.exports = {
    // '@disabled': true,

    elements: {
        usrDescription: '[data-testid="UserDescription"]',
    },

    beforeEach: function (nightwatch) {
        const landingPage = nightwatch.page.landingPage();
        const loginPage = landingPage.navigate().goToLoginPage(nightwatch);
        nightwatch.waitForElementVisible(loginPage.elements.signUpLink,
            nightwatch.globals.waitForConditionTimeout);
        loginPage.loginAs(data.user, data.password, nightwatch);
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Sidebar Quick Access buttons functionality': function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        homePage.isHomeTimelineDisplayed();
        const explorePage = homePage.clickExplore(nightwatch);
        explorePage.isExploreTimelineDisplayed();

        const notificationsPage = homePage.clickNotifications(nightwatch);
        notificationsPage.isNotificationsTimelineDisplayed();
        const messagesPage = homePage.clickMessages(nightwatch);
        messagesPage.isMessagesTimelineDisplayed();

        const bookmarksPage = homePage.clickBookmarks(nightwatch);
        bookmarksPage.isBookmarksTimelineDisplayed();
        const listsPage = homePage.clickLists(nightwatch);
        listsPage.isListsTitleDisplayed();

        const profilePage = homePage.clickProfile(nightwatch);
        profilePage.isUserDescriptionDisplayed();
    },

    'Login and send a random tweet': !function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        const random = extraCommands.default.setRandom(30);

        homePage.clickNewTweet().setTweet(random).sendTweet();
        nightwatch.waitForElementVisible(homePage.elements.tweetSentAlert);

        const profilePage = homePage.clickProfile(nightwatch);
        profilePage.lastTweetIsEqualsTo(tweets[['e' + random]], nightwatch);
    }
}