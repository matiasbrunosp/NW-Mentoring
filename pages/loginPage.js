module.exports = {
    elements: {
        usrInput: '[name="session[username_or_email]"][type="text"]',
        pwdInput: '[name="session[password]"][type="password"]',
        doLoginBtn: {
            selector: '//span[text()="Log in"]',
            locateStrategy: 'xpath'
        }
    }
}