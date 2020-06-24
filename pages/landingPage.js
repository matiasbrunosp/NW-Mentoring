module.exports = {
    elements: {
        loginBtn: '[data-testid="login"]',
    },

    commands: [{
        goToLoginPage() {
            this.click(this.elements.loginBtn);
            return this;
        }
    }]
};