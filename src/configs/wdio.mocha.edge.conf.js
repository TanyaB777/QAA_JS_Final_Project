const baseConfig = require('./wdio.mocha.conf.js');

exports.config = {
    ...baseConfig.config,
    capabilities: [
        { ...baseConfig.config.capabilities[0] }
    ]
};