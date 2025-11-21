const baseConfig = require('./wdio.base.conf.js');
const { existsSync, mkdirSync } = require('fs');

exports.config = {
    ...baseConfig.config,
    specs: [
        '../specs/**/*.spec.js'
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeTest: function (test, context) {
        console.log(`TEST STARTED: ${test.title} on ${browser.capabilities.browserName}`);
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            console.log(`TEST FAILED: ${test.title} (${duration}ms) with error "${error.message}"`);

            const filename = `${test.title.replace(/\s+/g, '_')}_${Date.now()}.png`;
            const dirPath = './artifacts/screenshots/';
        
            if (!existsSync(dirPath)) {
                mkdirSync(dirPath, {
                    recursive: true,
                });
            }

            await browser.saveScreenshot(dirPath + filename);
        }
        else
            console.log(`TEST FINISHED: ${test.title} (${duration}ms)`);
    }
};