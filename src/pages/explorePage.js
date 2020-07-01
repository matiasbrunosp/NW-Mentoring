module.exports = {
    elements: {
        exploreTimeline: '[aria-label="Timeline: Explore"]'
    },

    commands: [{
        isExploreTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.exploreTimeline);
        }
    }]
};