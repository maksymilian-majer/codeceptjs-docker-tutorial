module.exports = {
    url: "http://wptests",
    smartWait: 5000,
    browser: "chrome",
    restart: false,
    windowSize: "maximize",
    waitForTimeout: 10000,
    smartWait: 10000,
    keepCookies: true,
    keepBrowserState: true,
    port: 4445,
    timeouts: {
        "script": 60000,
        "page load": 60000
    },
    coloredLogs: true
};