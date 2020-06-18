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

        // nightwatch.waitForElementVisible(this.elements.input);
        // nightwatch.sendKeys(this.elements.input, query);
        // nightwatch.sendKeys(this.elements.input, nightwatch.Keys.ENTER);

        nightwatch.waitAndSearch(nightwatch, this.elements.input, query);

        nightwatch.pause(1000);
        nightwatch.waitForElementVisible(this.elements.input);
        nightwatch.waitForElementVisible(this.elements.results);

        nightwatch.waitForElementVisible(this.elements.imgBtn);
        nightwatch.click(this.elements.imgBtn);

        nightwatch.pause(2000);
        nightwatch.saveScreenshot('./screenshots/images.png');
    }
}