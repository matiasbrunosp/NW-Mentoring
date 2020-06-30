const common = require('./common.js')

const elements = {
    usrInput: '[name="session[username_or_email]"][type="text"]',
    pwdInput: '[name="session[password]"][type="password"]',
};

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

Object.assign(elements, common.elements[0]);
Object.assign(commands, common.commands[0]);

module.exports = {
    url: 'https://www.twitter.com',

    elements: [elements],
    commands: [commands]
};