module.exports = {
    elements: {
        notificationsTimeline: '[aria-label="Timeline: Notifications"]'
    },

    commands: [{
        isNotificationsTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.notificationsTimeline);
        }
    }]
};