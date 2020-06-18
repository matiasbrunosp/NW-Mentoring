module.exports.command = function (driver, input, query) {
    this.waitForElementVisible(input);
    this.sendKeys(input, query);
    this.sendKeys(input, driver.Keys.ENTER);
};