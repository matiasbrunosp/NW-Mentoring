module.exports = {
    elements: {
        loginBtn: '[data-testid="login"]',
        usrInput: '[name="session[username_or_email]"][type="text"]',
        pwdInput: '[name="session[password]"][type="password"]',
        doLoginBtn: '//span[text()="Log in"]',
        homeBtn: '[aria-label="Home"]',
        profileBtn: '[aria-label="Profile"]',
        usrDescription: '[data-testid="UserDescription"]',
        tweetTxtArea: '[data-testid="tweetTextarea_0"]',
        tweetBtn: '[data-testid="tweetButtonInline"]'
    },

    beforeEach: function (nightwatch) {
        nightwatch.url('https://www.twitter.com/');
        nightwatch.resizeWindow(1280, 800);

        const landingPage = nightwatch.page.landingPage();
        landingPage.goToLoginPage();

        const loginPage = nightwatch.page.loginPage();
        loginPage.setUsername();
        loginPage.setPassword();
        loginPage.clickLogin();
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Login and go to profile': function (nightwatch) {
        nightwatch.useCss().click(this.elements.homeBtn);
        nightwatch.click(this.elements.profileBtn);
        nightwatch.waitForElementVisible(this.elements.usrDescription, 'User bio is correctly displayed');
    },

    'Login and send a random tweet': function (nightwatch) {
        nightwatch.useCss().click(this.elements.homeBtn);
        const randomNumber = Math.floor((Math.random() * 100000) + 1);
        nightwatch.setValue(this.elements.tweetTxtArea, "Automated Message #" + randomNumber);
        nightwatch.click(this.elements.tweetBtn);
    }
}