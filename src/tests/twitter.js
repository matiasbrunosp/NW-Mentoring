var data = require('../data/data.json');

module.exports = {
    '@disabled': true,

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

    'Login and go to profile': function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        homePage.clickProfile();
        nightwatch.waitForElementVisible(this.elements.usrDescription, nightwatch.globals.waitForConditionTimeout);
    },

    'Login and send a random tweet': function (nightwatch) {
        const homePage = nightwatch.page.homePage();
        homePage.setTweet();
    }
}