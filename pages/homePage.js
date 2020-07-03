module.exports = {
    elements: {
        homeBtn: '[aria-label="Home"]',
        profileBtn: '[aria-label="Profile"]',
        tweetTxtArea: '[data-testid="tweetTextarea_0"]',
        tweetBtn: '[data-testid="tweetButtonInline"]'
    },

    commands: {
        clickHomeBtn() {
            this.click(this.elements.homeBtn);
        },

        clickProfileBtn() {
            this.click(this.elements.profileBtn);
        }
    }
}