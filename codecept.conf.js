const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);




exports.config = {
  tests: 'tests/**/*_test.js',  //./tests./*_test.js
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://staging.appsero.com',
      show: true,
      windowSize: '1400x900',
      smartWait: 5000,
      waitForAction:2000,
      keepCookies: true,
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions:{
      reportDir:'output'
    },reporterOptions: {
        mochaFile: 'output/result.xml'
    }
  },
  name: 'codecept_puppetiers',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    multiple:{

      grep:'@accounts'

    }, allure: {
      enabled: 'true'
  }, 
  
  }
}
