/**
 * Clears the value of the given input element by simulating Backspace key presses.
 * @param {WebdriverIO.Element} element - The input element to be cleared.
 * 
 */

const isMac = process.platform === 'darwin';

async function clearElementValue(element) {
    try {
        await element.waitForDisplayed();

        await element.click();
        const modifierKey = isMac ? 'Meta' : 'Control';

        await browser.keys([modifierKey, 'a']);
        await browser.keys('Backspace');
    }
    catch (error) {
        console.log("ERROR while clearing element value:", error);
        throw error;
    }
}

module.exports = { clearElementValue: clearElementValue };