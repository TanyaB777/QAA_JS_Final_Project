const baseConfig = require('./wdio.cucumber.conf.js');

exports.config = {
    ...baseConfig.config,
    capabilities: [
        {
            browserName: 'edge',
            'ms:edgeOptions': {
                args: [
                    '--window-size=1920,1080',
                    '--headless',
                    '--disable-gpu'
                ]
            }
        }
    ]
};