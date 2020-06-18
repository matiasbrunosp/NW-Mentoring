module.exports = {
    elements: {
        input: '.gLFyf.gsfi',
        results: '#center_col #res',
        imgBtn: '.hdtb-mitem:nth-of-type(2) a'
    },

    beforeEach: function (nightwatch) {
        nightwatch.url('https://www.google.com/');
    },

    afterEach: function (nightwatch) {
        nightwatch.end();
    },

    'Open images and save screenshot': function (nightwatch) {
        const query = 'Libertadores Madrid 2018';

        const homePage = nightwatch.page.homePage();
        homePage.setQuery(query);
        homePage.clickSearch();

        nightwatch.pause(1000);
        nightwatch.waitForElementVisible(this.elements.input);
        nightwatch.waitForElementVisible(this.elements.results);

        const resultsPage = nightwatch.page.resultsPage();
        resultsPage.clickImages();

        nightwatch.pause(2000);
        nightwatch.saveScreenshot('./screenshots/images.png');
    }
}