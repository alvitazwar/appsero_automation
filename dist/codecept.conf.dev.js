"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('@codeceptjs/configure'),
    setHeadlessWhen = _require.setHeadlessWhen; // turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run


setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: 'tests/**/*_test.js',
  //./tests./*_test.js
  output: './output',
  helpers: {
    Puppeteer: {
      // url: 'https://dashboard.appsero.com',
      url: 'https://staging.appsero.com',
      //https://staging.appsero.com  
      show: true,
      windowSize: '1366x768',
      smartWait: 5000,
      waitForAction: 2000,
      keepCookies: true,
      restart: false
    },
    REST: {
      endpoint: 'https://staging.api.appsero.com',
      //'https://staging.api.appsero.com'
      onRequest: function onRequest(request) {// request.headers.auth = '123';
      },
      defaultHeaders: {
        "accept": 'application/json',
        "authorization": 'Bearer dLSU7QA9adNnybjwhF6zWNUN6kzwuXSt'
      }
    },
    "ChaiWrapper": {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: _defineProperty({
    reporterOptions: {
      reportDir: 'output'
    }
  }, "reporterOptions", {
    mochaFile: 'output/result.xml'
  }),
  name: 'codecept_puppetiers',
  plugins: {
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: false
    },
    multiple: {
      smoke: '@explore_analytics'
    },
    allure: {
      enabled: 'true'
    },
    tryTo: {
      enabled: true
    }
  },
  rerun: {
    // run all tests must pass exactly 5 times
    minSuccess: 5,
    maxReruns: 5
  }
};