const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config()
const { env } = require('./utils')


// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
exports.config = {
    tests: 'core-tests/**/**/*_test.js', //./tests./*_test.js
    output: './output',
    helpers: {
        Puppeteer: {

            url: env('URL'),
            show: false,
            browser: 'chrome',
            windowSize: '1440 x900',
            // desiredCapabilities: {
            //     chromeOptions: {
            //         args: ["--window-size=1400,900", "--disable-gpu", "--no-sandbox"]
            //     },
            //     defaultViewport: null
            // },
            chrome: {
                args: [
                    "--no-sandbox",
                    "--window-size=1440,900"
                ],
                "defaultViewport": null
            },
            smartWait: 5000,
            waitForAction: 2000,
            keepCookies: true,
            keepBrowserState: true,
            restart: false,

        },
        REST: {
            endpoint: env('ENDPOINT'),
            onRequest: (request) => {},
            defaultHeaders: {
                "accept": 'application/json',
                "authorization": env('BEARER')
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
    // mocha: {
    //     reporterOptions: {
    //         reportDir: 'output'
    //     },
    //     reporterOptions: {
    //         mochaFile: 'output/result.xml'
    //     }
    // },
    name: 'codecept_puppeteers',
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
                        I.fillField('Email Address', env('USERNAME')); //
                        I.fillField('Password', secret(env('PASSWORD')));
                        I.click('Log in');
                        //I.see('Plugins');
                    },
                    check: (I) => {
                        I.see('Plugins');
                    },
                }
            },
        }
    },
    rerun: {
        // run all tests must pass exactly 5 times
        minSuccess: 5,
        maxReruns: 5,
    }
}