const extraCommands = require('../commands/extraCommands');

module.exports = {
    elements: {
        messagesTimeline: '[aria-label="Timeline: Messages"]',
        newMessageBtn: {
            selector: '//span[text()="New message"]',
            locateStrategy: 'xpath'
        },
        messagePopup: '[aria-labelledby="modal-header"]',
        searchPeopleInput: '[data-testid="searchPeople"]',
        searchResults: '[data-testid="TypeaheadUser"]',
        nextBtn: '[data-testid="nextButton"]',
        infoBtn: '[aria-label="Conversation info"]',
        dmComposerInput: '[data-testid="dmComposerTextInput"]',
        dmComposerSendBtn: '[data-testid="dmComposerSendButton"]',
    },

    commands: [{
        isMessagesTimelineDisplayed() {
            return this.waitForElementVisible(this.elements.messagesTimeline,
                'Messages page is visible');
        },

        clickNewMessage() {
            return this.click(this.elements.newMessageBtn);
        },

        isMessagePopupDisplayed() {
            return this.waitForElementVisible(this.elements.messagePopup,
                'Message Popup is visible');
        },

        searchUserToMessage(user, index, nightwatch) {
            this.setValue(this.elements.searchPeopleInput, user).pause(1500);
            nightwatch.getText(`${this.elements.searchResults.selector} .css-16my406 > span`, function (user) {
                extraCommands.default.clickElementByIndex('[data-testid="TypeaheadUser"]', index, nightwatch);
                return this.waitForElementVisible(`[aria-label="${user.value} - select to remove"]`,
                    `User '${user.value}' was selected`);
            });
        },

        clickNext() {
            return this.click(this.elements.nextBtn);
        },

        clickInfo(nightwatch) {
            this.click(this.elements.infoBtn);
            return nightwatch.page.conversationInfoPage();
        },

        setMessage(msg, random) {
            return this.setValue(this.elements.dmComposerInput, msg + random);
        },

        clickSend() {
            return this.click(this.elements.dmComposerSendBtn);
        },

        isLatestMessageEqualsTo(msg) {
            latestMsgEl = `//div[@data-testid='conversation']//span[text()='${msg}']`;
            this.useXpath();
            return this.waitForElementVisible(latestMsgEl, `Message '${msg}' was correctly sent`);
        }
    }]
};