module.exports = {
    elements: {
        bookmarksTimeline: '[aria-label="Timeline: Bookmarks"]'
    },

    commands: [{
        isBookmarksTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.bookmarksTimeline);
        }
    }]
};