const baseConfig = require('./wdio.cucumber.conf.js');

exports.config = {
    ...baseConfig.config,
    capabilities: [
        { ...baseConfig.config.capabilities[1] }
    ]
};