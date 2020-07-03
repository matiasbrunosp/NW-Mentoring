module.exports = {

    'Login and go to profile': function (nightwatch) {
        const usr = 'matiasbrunousers@gmail.com';
        const pwd = 'p455word';

        nightwatch.url('https://www.twitter.com/');
        nightwatch.resizeWindow(1280, 800);

        const landingPage = nightwatch.page.landingPage();
        nightwatch.click(landingPage.elements.loginBtn);

        const loginPage = nightwatch.page.loginPage();
        nightwatch.setValue(loginPage.elements.usrInput, usr);
        nightwatch.setValue(loginPage.elements.pwdInput, pwd);
        nightwatch.click(loginPage.elements.doLoginBtn);

        const homePage = nightwatch.page.homePage();
        homePage.clickHomeBtn();
        homePage.clickProfileBtn();
        // nightwatch.click(homePage.elements.homeBtn);
        // nightwatch.click(homePage.elements.profileBtn);

        const profilePage = nightwatch.page.profilePage();
        profilePage.waitForUserDescription();
        // nightwatch.waitForElementVisible(profilePage.elements.usrDescription);

        nightwatch.end();
    },

    'Login and send a random tweet': function (nightwatch) {
        const usr = 'matiasbrunousers@gmail.com';
        const pwd = 'p455word';

        nightwatch.url('https://www.twitter.com/');
        nightwatch.resizeWindow(1280, 800);

        const landingPage = nightwatch.page.landingPage();
        nightwatch.click(landingPage.elements.loginBtn);

        const loginPage = nightwatch.page.loginPage();
        nightwatch.setValue(loginPage.elements.usrInput, usr);
        nightwatch.setValue(loginPage.elements.pwdInput, pwd);
        nightwatch.useXpath().click(loginPage.elements.doLoginBtn);

        const homePage = nightwatch.page.homePage();
        nightwatch.useCss().click(homePage.elements.homeBtn);

        const randomNumber = Math.floor((Math.random() * 100000) + 1);
        nightwatch.setValue(homePage.elements.tweetTxtArea, "Automated Message #" + randomNumber);
        nightwatch.click(homePage.elements.tweetBtn);

        nightwatch.end();
    }
}