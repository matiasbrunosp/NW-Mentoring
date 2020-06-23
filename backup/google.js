module.exports = {
    elements: {
        input: '.gLFyf.gsfi',
        results: '#center_col #res'
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

        nightwatch.waitForElementVisible(this.elements.input, "input element is visible");
        nightwatch.waitForElementVisible(this.elements.results);

        const resultsPage = nightwatch.page.resultsPage();
        resultsPage.clickImages();

        nightwatch.saveScreenshot('./screenshots/images.png');
    }
}