module.exports = {
    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Just testing the amazing custom commands': function (nightwatch) {
        // DO NOT DELETE (GOING TO USE IN EXISTING CODE)
        // nightwatch.page['page1']().navigate().doSomething('1', '2', '3', (result) => { console.log(result); });

        const page = nightwatch.page['page1']().navigate();
        page.fSomeCommonCommand();

        nightwatch.pause(3000);
        page.setUsername();
        page.setPassword();
        nightwatch.pause(3000);
        page.fAnotherCommonCommand();
    }
}