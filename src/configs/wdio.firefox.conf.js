const baseConfig = require('./wdio.conf.js');

exports.config = {
    ...baseConfig.config,
    capabilities: [
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--width=1920',
                    '--height=1080',
                    '--headless'
                ]
            }
        }
    ]
};