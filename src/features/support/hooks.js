const { Before, After, AfterStep} = require('@cucumber/cucumber');
const allure = require('@wdio/allure-reporter').default;
const { existsSync, mkdirSync } = require('fs');

Before(function (scenario) {
    console.log("SCENARIO STARTED:", browser.capabilities.browserName);
});

AfterStep(async function ({ result, pickleStep }) {
    const stepName = pickleStep ? pickleStep.text : 'step';
    const safeFilename = stepName.replace(/[\/\\?%*:|"<> ]/g, '_') + '.png';
    const dirPath = './artifacts/screenshots/';

    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }

    if (result.status === 'FAILED') {
        console.log(`STEP FAILED: ${stepName}`);
        await browser.saveScreenshot(dirPath + safeFilename);
        console.log(`STEP PASSED: ${stepName}`);
    }
});

After(function (scenario) {
    console.log(
        `SCENARIO FINISHED: ${scenario.pickle.name} on ${browser.capabilities.browserName}`
    );
});
