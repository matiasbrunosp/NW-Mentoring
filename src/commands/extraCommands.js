exports.default = {
    setRandom(max) {
        return Math.floor((Math.random() * max) + 1);
    },

    clickElementByIndex(selector, index, nightwatch) {
        nightwatch.click({ selector: selector, index: index });
    },

    elementByIndexEqualsTo(actual, index, expect, nightwatch) {
        nightwatch.expect.element({ selector: actual, index: index }).text.to.contain(expect);
    }
}