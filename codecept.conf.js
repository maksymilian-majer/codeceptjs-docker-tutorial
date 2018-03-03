let webDriverConfig = require('./webdriver.conf');

webDriverConfig.host = process.env.SELENIUM_HOST || 'localhost';
webDriverConfig.port = process.env.SELENIUM_PORT || 4445;
console.log('Selenium config', 'Host:', webDriverConfig.host, 'Port:', webDriverConfig.port);

exports.config = {
    "tests": "./tests/**/*_test.js",
    "timeout": 10000,
    "output": "./output",
    helpers: {
        WebDriverIO: webDriverConfig
    },

    include: {
        "I": "./steps_file.js",
        "Security": "./tests/01_security/steps.js"
    },
    "bootstrap": false,
    "mocha": {},
    "name": "codceptjs-docker-tutorial"
};