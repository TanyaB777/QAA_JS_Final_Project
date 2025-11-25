const baseConfig = require('./wdio.base.conf.js');

exports.config = {
    ...baseConfig.config,
    specs: [
        '../features/**/*.feature'
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./src/step-definitions/*.steps.js',
             './src/features/support/hooks.js'],
        timeout: 60000,
    }
};