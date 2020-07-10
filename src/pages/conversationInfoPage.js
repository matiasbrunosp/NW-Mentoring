module.exports = {
    elements: {
        userInfo: '[data-testid="UserCell"]',
        backBtn: '[aria-label="Back"]'
    },

    commands: [{
        isUserInfoDisplayed(user, nightwatch) {
            nightwatch.getText(`${this.elements.userInfo.selector} a span > span`, function (username) {
                this.assert.equal(username.value, user, 'User Info is displayed');
            })
        },

        clickBack(nightwatch) {
            this.click(this.elements.backBtn);
            return nightwatch.page.messagesPage();
        }
    }]
};