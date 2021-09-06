const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);




exports.config = {
    tests: 'tests/**/*_test.js', //./tests./*_test.js
    output: './output',
    helpers: {
        Puppeteer: {
            // url: 'https://dashboard.appsero.com',
            url: 'https://staging.appsero.com', //https://staging.appsero.com  
            show: false,
            windowSize: '1366x768',
            smartWait: 5000,
            waitForAction: 2000,
            keepCookies: false,
            restart: true,
        },
        REST: {
            endpoint: 'https://staging.api.appsero.com',
            onRequest: (request) => {
                // request.headers.auth = '123';
            },
            defaultHeaders: {
                "accept": 'application/json',
                "authorization": 'Bearer dLSU7QA9adNnybjwhF6zWNUN6kzwuXSt'

            }
        },
        "ChaiWrapper": {
            "require": "codeceptjs-chai"
        },

    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {
        reporterOptions: {
            reportDir: 'output'
        },
        reporterOptions: {
            mochaFile: 'output/result.xml'
        }
    },
    name: 'codecept_puppetiers',
    plugins: {
        retryFailedStep: {
            enabled: true
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
        maxReruns: 5,
    }
}