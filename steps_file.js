// in this file you can append custom step methods to 'I' object
var Factory = require('rosie');
var faker = require('faker');
module.exports = function() {
    return actor({
        getfakepass() {
            return data = {
                oldpass: faker.internet.password(),
                nwpass: faker.internet.password(),
                old2pass: nwpass,
            }
        },
        Selectplugin: function() {
            this.click('FastSpring_License_subs');
        },
        loginAsAdmin: function() {
            this.amOnPage('/login');
            //this.click('Log in');
            this.fillField('Email Address', 'atd.mondol@gmail.com'); //
            this.fillField('Password', 'appsero@4321');
            this.click('Log in');
            this.see('Plugins');
        },
        loginAsAdminProduction: function() {
            this.amOnPage('https://dashboard.appsero.com/login');
            //this.click('Log in');
            this.fillField('Email Address', 'atd.mondol@gmail.com'); //
            this.fillField('Password', 'alvi@4321');
            this.click('Log in');
            this.see('Plugins');
        },
        checkError: function() {
            this.dontSee('Unknown error occurred.');
            this.dontSee('Warning');
            this.dontSee('Fatal error');
            this.dontSee('Notice:');
        },
        metadataCreate: function() {
            this.fillField('Name', faker.name.firstName());

        },
        metadataPlugin: function() {
            this.fillField('Plugin Name', faker.name.title());

        },
        metadataVersion: function() {
            this.fillField('Plugin Version', faker.random.float({ min: 1.0, max: 2.0 }));

        },
        metadataPHP: function() {
            this.click('//*[@id="php"]/div/div');
            this.fillField('//*[@id="php"]/div/div', faker.random.arrayElement(["7.1", "7.2", "7.3", "7.4"]));

        },
        metadataWordpress: function() {
            this.click('//*[@id="requires"]/div/div');
            this.fillField('//*[@id="requires"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));

        },
        metadataTested: function() {
            this.click('//*[@id="tested"]/div/div');
            this.fillField('//*[@id="tested"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));

        },
        valid_email: function() {
            this.clearField('//*[@id="app"]//div/span/input');
            this.fillField('//*[@id="app"]//div/span/input', faker.internet.email());
        },
        objecttest: function() {

        },
        ImageUpload: function() {

            this.usePuppeteerTo('upload action', async({ page, browser }) => {
                const [fileChooser] = await Promise.all([
                        page.waitForFileChooser(),
                        page.click()
                    ])
                    //await fileChooser.accept(['data/img1.png']);
                await fileChooser.accept();

                await page.waitForSelector();
                await page.click();
                this.wait(10)
                    //await page.waitForTimeout(5000);
            })
        }
        ``


        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.


    });
}