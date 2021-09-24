"use strict";

var _require = require('@codeceptjs/configure'),
    setHeadlessWhen = _require.setHeadlessWhen; // turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run


setHeadlessWhen(process.env.HEADLESS);
exports.config = {
  tests: 'core-tests/**/**/*_test.js',
  //./tests./*_test.js
  output: './output',
  helpers: {
    Puppeteer: {
      // url: 'https://dashboard.appsero.com',
      url: 'https://staging.appsero.com',
      //https://staging.appsero.com  
      show: true,
      browser: 'chrome',
      windowSize: '1440 x900',
      // desiredCapabilities: {
      //     chromeOptions: {
      //         args: ["--window-size=1400,900", "--disable-gpu", "--no-sandbox"]
      //     },
      //     defaultViewport: null
      // },
      smartWait: 5000,
      waitForAction: 2000,
      keepCookies: false,
      restart: false
    },
    REST: {
      endpoint: 'https://staging.api.appsero.com',
      //'https://staging.api.appsero.com'
      onRequest: function onRequest(request) {// request.headers.auth = '123';
      },
      defaultHeaders: {
        "accept": 'application/json',
        "authorization": 'Bearer ycSRuZO2JjyWycDP6lMsvvkU04cjDdNO'
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
  // mocha: {
  //     reporterOptions: {
  //         reportDir: 'output'
  //     },
  //     reporterOptions: {
  //         mochaFile: 'output/result.xml'
  //     }
  // },
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
    },
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'loginAs',
      users: {
        admin_staging: {
          login: function login(I) {
            I.amOnPage('https://staging.appsero.com/login');
            I.fillField('Email Address', 'atd.mondol@gmail.com'); //

            I.fillField('Password', secret('appsero@_6598'));
            I.click('Log in');
            I.see('Plugins');
          },
          check: function check(I) {
            I.seeCurrentUrlEquals('/login');
          }
        },
        admin_production: {
          login: function login(I) {
            I.amOnPage('https://dashboard.appsero.com/login'); //this.click('Log in');

            I.fillField('Email Address', 'atd.mondol@gmail.com'); //

            I.fillField('Password', 'appsero@_6598');
            I.click('Log in');
            I.see('Plugins');
          }
        }
      }
    }
  },
  rerun: {
    // run all tests must pass exactly 5 times
    minSuccess: 5,
    maxReruns: 5
  }
};