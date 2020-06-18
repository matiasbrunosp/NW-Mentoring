module.exports = {
    elements: {
        input: '.gLFyf.gsfi',
        searchBtn: '.FPdoLc.tfB0Bf [name="btnK"]',
        feelingLuckyBtn: '.FPdoLc.tfB0Bf [name="btnI"]'
    },

    commands: [{
        setQuery(query) {
            this.waitForElementVisible(this.elements.input);
            this.setValue(this.elements.input, query);
            return this;
        },

        clickSearch() {
            this.click(this.elements.searchBtn);
            return this;
        },

        clickFeelingLucky() {
            this.click(this.elements.feelingLuckyBtn);
            return this;
        }
    }]
};