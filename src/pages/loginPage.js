module.exports = {
    elements: {
        usrInput: '[name="session[username_or_email]"][type="text"]',
        pwdInput: '[name="session[password]"][type="password"]',
        loginBtn: {
            selector: '//span[text()="Log in"]',
            locateStrategy: 'xpath'
        }
    },

    commands: [{
        setUsername(usr) {
            if (!usr) usr = 'matiasbrunousers@gmail.com'
            return this.setValue(this.elements.usrInput, usr);
        },

        setPassword(pwd) {
            if (!pwd) pwd = 'p455word'
            return this.setValue(this.elements.pwdInput, pwd);
        },

        clickLogin() {
            return this.click(this.elements.loginBtn);
        }
    }]
};