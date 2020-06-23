module.exports = {
    // '@disabled': true,
    elements: {},

    'Login and go to profile': function (nightwatch) {

        nightwatch.url('https://www.twitter.com/');
        nightwatch.resizeWindow(1280, 800);

        nightwatch.click('[data-testid="login"]');
        nightwatch.setValue('[name="session[username_or_email]"][type="text"]', 'matiasbrunousers@gmail.com');
        nightwatch.setValue('[name="session[password]"][type="password"]', 'p455word');
        nightwatch.useXpath().click('//span[text()="Log in"]');

        nightwatch.useCss().click('[aria-label="Home"]');

        nightwatch.click('[aria-label="Profile"]');
        nightwatch.waitForElementVisible('[data-testid="UserDescription"]', 'User bio is correctly displayed');

        nightwatch.end();
    }
}