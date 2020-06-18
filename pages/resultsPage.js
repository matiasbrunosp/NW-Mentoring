module.exports = {
    elements: {
        clearBtn: 'div[aria-label="Clear"]',
        imagesBtn: '.hdtb-mitem:nth-of-type(2) a',
        newsBtn: '.hdtb-mitem:nth-of-type(3) a',
        videosBtn: '.hdtb-mitem:nth-of-type(4) a',
        mapsBtn: '.hdtb-mitem:nth-of-type(5) a'
    },

    commands: [{
        clearInput() {
            this.click(this.elements.clearBtn);
            return this;
        },

        clickImages() {
            this.waitForElementVisible(this.elements.imagesBtn);
            this.click(this.elements.imagesBtn);
            return this;
        },

        clickNews() {
            this.click(this.elements.newsBtn);
            return this;
        },

        clickVideos() {
            this.click(this.elements.videosBtn);
            return this;
        },

        clickMaps() {
            this.click(this.elements.mapsBtn);
            return this;
        }
    }],
};
