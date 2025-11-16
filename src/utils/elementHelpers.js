/**
 * Clears the value of the given input element by simulating Backspace key presses.
 * @param {WebdriverIO.Element} element - The input element to be cleared.
 * @returns {Promise<void>}
 */

async function clearElementValue(element) {
    try {
        await element.waitForDisplayed();
        let currentCount = element.getValue().toString().length;

        while (currentCount >= 0) {
            await element.addValue('\uE003');
            currentCount--;
        }
    }
    catch (error) {
        console.log("ERROR: Error while clearing the element value:", error);
        throw error;
    }
}

module.exports = { clearElementValue: clearElementValue };