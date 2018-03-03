let webDriverConfig = require('./webdriver.conf'); // reading selenium config from separate file

webDriverConfig.host = process.env.SELENIUM_HOST || 'localhost'; // choosing local vs. docker selenium
webDriverConfig.port = process.env.SELENIUM_PORT || 4445; // running local and docker on different ports to avoid conflics
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
        "Security": "./tests/01_security/steps.js" // allows adding commonly used steps – like login
    },
    "bootstrap": false,
    "mocha": {},
    "name": "codceptjs-docker-tutorial"
};