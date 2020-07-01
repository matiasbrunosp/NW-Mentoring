module.exports = {
    url: 'https://www.twitter.com',

    elements: {
        loginBtn: '[data-testid="login"]',
    },

    commands: [{
        goToLoginPage(nightwatch) {
            this.resizeWindow(1280, 800);
            this.click(this.elements.loginBtn);
            return nightwatch.page.loginPage();
        }
    }]
};