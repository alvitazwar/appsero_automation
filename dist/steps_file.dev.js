"use strict";

// in this file you can append custom step methods to 'I' object
var Factory = require('rosie');

var faker = require('faker');

module.exports = function () {
  return actor({
    loginAsAdmin: function loginAsAdmin() {
      this.amOnPage('/login'); //this.click('Log in');

      this.fillField('Email Address', 'atd.mondol@gmail.com');
      this.fillField('Password', 'appsero@4321');
      this.click('Log in');
      this.see('Plugins');
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
      this.fillField('Plugin Name', faker.name.title());
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
    } // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
};