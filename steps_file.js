// in this file you can append custom step methods to 'I' object
var Factory= require('rosie');
var faker =require('faker');
module.exports = function() {
  return actor({
    loginAsAdmin: function () {
    this.amOnPage('https://staging.appsero.com/login');
    //this.click('Log in');
    this.fillField('Email Address', 'alvitazwar@wedevs.com');
    this.fillField('Password','crisis052');
    this.click('Log in');
    this.see('Plugins');
  },
   metadataCreate : function()
   {
     this.fillField('Name',faker.name.firstName());


   }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
