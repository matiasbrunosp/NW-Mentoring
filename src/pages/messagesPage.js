module.exports = {
    elements: {
        messagesTimeline: '[aria-label="Timeline: Messages"]',
        newMessageBtn: {
            selector: '//span[text()="New message"]',
            locateStrategy: 'xpath'
        },
        messagePopup: '[aria-labelledby="modal-header"]',

    },

    commands: [{
        isMessagesTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.messagesTimeline);
        },

        clickNewMessage() {
            return this.click(this.elements.newMessageBtn);
        },

        isMessagePopupDisplayed() {
            return this.waitForElementVisible(this.elements.messagePopup);
        }
    }]
};