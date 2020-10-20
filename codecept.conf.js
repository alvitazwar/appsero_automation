const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);




exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1366x768',
      smartWait: 5000,
      waitForAction:300,
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

      grep:'@team'

    }, allure: {
      enabled: 'true'
  }
  }
}
