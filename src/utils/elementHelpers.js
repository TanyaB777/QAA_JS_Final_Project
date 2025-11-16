/**
 * Clears the value of the given input element by simulating Backspace key presses.
 * @param {WebdriverIO.Element} element - The input element to be cleared.
 * 
 */

async function clearElementValue(element) {
    try {
        await element.waitForDisplayed();

        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
    catch (error) {
        console.log("ERROR while clearing element value:", error);
        throw error;
    }
}

module.exports = { clearElementValue: clearElementValue };