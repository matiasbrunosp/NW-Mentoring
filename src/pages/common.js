module.exports = {
    elements: {
        sharedButton: '[data-testid="login"]' 
    },

    commands: [{
        fSomeCommonCommand() {
            console.log('Im a common command, dude!');
            this.click('[data-testid="login"]');
        },

        fAnotherCommonCommand() {
            console.log('Im ANOTHER COMMON COMMAND, peach!');
        }
    }]
};