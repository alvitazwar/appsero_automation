"use strict";

// in this file you can append custom step methods to 'I' object
var Factory = require('rosie');

var faker = require('faker');

module.exports = function () {
  return actor({
    getfakepass: function getfakepass() {
      return data = {
        oldpass: faker.internet.password(),
        nwpass: faker.internet.password(),
        old2pass: nwpass
      };
    },
    Selectplugin: function Selectplugin() {
      this.click('FastSpring_License_subs');
    },
    checkError: function checkError() {
      this.dontSee('Unknown error occurred.');
      this.dontSee('Warning');
      this.dontSee('Fatal error');
      this.dontSee('Notice:');
    },
    metadataCreate: function metadataCreate() {
      this.fillField('Name', faker.name.firstName());
    },
    metadataPlugin: function metadataPlugin() {
      var name_data = faker.name.title();
      this.fillField('Plugin Name', name_data);
      return name_data;
    },
    metadataVersion: function metadataVersion() {
      this.fillField('Plugin Version', faker.random["float"]({
        min: 1.0,
        max: 2.0
      }));
    },
    metadataPHP: function metadataPHP() {
      this.click('//*[@id="php"]/div/div');
      this.fillField('//*[@id="php"]/div/div', faker.random.arrayElement(["7.1", "7.2", "7.3", "7.4"]));
    },
    metadataWordpress: function metadataWordpress() {
      this.click('//*[@id="requires"]/div/div');
      this.fillField('//*[@id="requires"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));
    },
    metadataTested: function metadataTested() {
      this.click('//*[@id="tested"]/div/div');
      this.fillField('//*[@id="tested"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));
    },
    valid_email: function valid_email() {
      this.clearField('//*[@id="app"]//div/span/input');
      this.fillField('//*[@id="app"]//div/span/input', faker.internet.email());
    },
    slug_return: function slug_return() {
      return faker.random.arrayElement(["Woo funnel", "Astra wp", "Ocean wp", "Avada", "X theme", "Studio press", "Jupiter den"]);
    } // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
};