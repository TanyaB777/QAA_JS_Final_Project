const { Before, After} = require('@cucumber/cucumber');
const allure = require('@wdio/allure-reporter').default;
const { existsSync, mkdirSync } = require('fs');

Before(function (scenario) {
    console.log(
        `SCENARIO STARTED: ${scenario.pickle.name} on ${browser.capabilities.browserName}`
    );
});

After(async function (scenario) {
    const scenarioName = scenario.pickle.name;
    if (scenario.result.status === 'FAILED') {
        console.log(`SCENARIO FAILED: ${scenarioName} with error "${scenario.result.message}"`);

        const fileName = `${scenarioName.replace(/[\/\\?%*:|$^&"<> ]/g, '_')}_${Date.now()}.png`;
        const dirPath = './artifacts/screenshots/';
    
        if (!existsSync(dirPath)) {
            mkdirSync(dirPath, { recursive: true });
        }

        await browser.saveScreenshot(dirPath + fileName);

    }
    else
        console.log(`SCENARIO FINISHED: ${scenarioName} on ${browser.capabilities.browserName}`
    );
});
