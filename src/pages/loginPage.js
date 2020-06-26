module.exports = {
    elements: {
        usrInput: '[name="session[username_or_email]"][type="text"]',
        pwdInput: '[name="session[password]"][type="password"]',
        doLoginBtn: {
            selector: '//span[text()="Log in"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        setUsername() {
            this.setValue(this.elements.usrInput, 'matiasbrunousers@gmail.com');
            return this;
        },

        setPassword() {
            this.setValue(this.elements.pwdInput, 'p455word');
            return this;
        },

        clickLogin() {
            this.click(this.elements.doLoginBtn);
            return this;
        }
    }]
};