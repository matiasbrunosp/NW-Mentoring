const common = require('./common.js')

const commands = {
    setUsername(usr) {
        if (!usr) usr = 'matiasbrunousers@gmail.com';
        return this.setValue(this.elements.usrInput, usr);
    },

    setPassword(pwd) {
        if (!pwd) pwd = 'p455word';
        return this.setValue(this.elements.pwdInput, pwd);
    }
};

Object.assign(commands, common.commands[0]);

module.exports = {
    url: 'https://www.twitter.com',

    elements: {
        usrInput: '[name="session[username_or_email]"][type="text"]',
        pwdInput: '[name="session[password]"][type="password"]'
    },
    commands: [commands]
};