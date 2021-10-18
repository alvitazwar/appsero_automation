const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);




exports.config = {
    tests: 'core-tests/**/**/*_test.js', //./tests./*_test.js
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://test.com',
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
            keepCookies: true,
            restart: false,

        },
        REST: {
            endpoint: 'https://test.api.com',
            onRequest: (request) => {

            },
            defaultHeaders: {
                "accept": 'application/json',
                "authorization": 'Bearer [Your Token]'

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
                admin: {
                    login: (I) => {
                        I.amOnPage('/login');
                        I.fillField('Username', 'YourUsername');
                        I.fillField('Password', secret('YourPassword'));
                        I.checkOption('Remember Me');
                        I.click('Log In');
                    },
                    check: (I) => {
                        I.seeCurrentUrlEquals('/login');
                    },
                },

            },
        }


    },
    rerun: {
        // run all tests must pass exactly 5 times
        minSuccess: 5,
        maxReruns: 5,
    }
}