// in this file you can append custom step methods to 'I' object
var Factory = require('rosie');
var faker = require('faker');
const path = require('path');
const slugify = require('slugify');
const fs = require('fs');
var read_data;
var pluginslug;
var mypath = './core-tests/e2e/pro_plugin/test.txt';
require('dotenv').config()
const { env } = require('./utils')
    //var pname = require('./core-tests/e2e/pro_plugin/initial_test');
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
            this.amOnPage('/plugins');
            read_data = env('PLUGIN')
                // read_data = fs.readFileSync(mypath, 'utf8');
            pluginslug = slugify(read_data, {
                replacement: '-',
                lower: true,
            });
            this.amOnPage(`/plugins/${pluginslug}/get-started`);
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
            let name_data = faker.name.title();
            this.fillField('Plugin Name', name_data);
            return name_data;
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
        slug_return: function() {
            return faker.random.arrayElement(["Woo funnel", "Astra wp", "Ocean wp", "Avada", "X theme", "Studio press", "Jupiter den"])
        },
        async check_analytics_premium() {
            const upgrade = await tryTo(() => this.see('Export Unavailable'));
            console.log(upgrade);
            return upgrade;
        }


        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.


    });
}