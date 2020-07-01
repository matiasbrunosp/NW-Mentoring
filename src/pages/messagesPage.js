module.exports = {
    elements: {
        messagesTimeline: '[aria-label="Timeline: Messages"]'
    },

    commands: [{
        isMessagesTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.messagesTimeline);
        }
    }]
};