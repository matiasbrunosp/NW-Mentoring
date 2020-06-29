var data = require('../data/data.json');

module.exports = {
    elements: {
        usrDescription: '[data-testid="UserDescription"]',
        tweetBtn: '[data-testid="tweetButtonInline"]'
    },

    beforeEach: function (nightwatch) {
        const landingPage = nightwatch.page.landingPage();
        const loginPage = landingPage.navigate().goToLoginPage(nightwatch);
        loginPage.setUsername(data.user).setPassword(data.password);
        loginPage.clickLogin(nightwatch).clickHome();
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Login and go to profile': !function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        homePage.clickProfile();
        nightwatch.waitForElementVisible(this.elements.usrDescription, 'User bio is correctly displayed');
    },

    'Login and send a random tweet': function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        homePage.setTweet();
        nightwatch.click(this.elements.tweetBtn);
    }
}