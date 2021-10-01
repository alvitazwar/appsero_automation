"use strict";

var locator = require('./accounts_locator_test');

Feature('Appsero Accounts');
Scenario('@accounts Toggle Notification ', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.click(locator.profilemenu);
          I.click('Account');
          I.click('Notification Settings');
          I.click(locator.emailnotification);
          I.see(locator.msg);
          I.click(locator.emailnotification);
          I.see(locator.msg);
          I.click(locator.appseronoification);
          I.see(locator.msg);
          I.click(locator.appseronoification);
          I.see(locator.msg);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@accounts'); // Scenario('@accounts api create ', async({ I, loginAs }) => {
//     //loginAs('admin_staging');
//     I.grabCookie();
//     I.amOnPage('/api-keys');
//     I.click(locator.apikeymenu);
//     I.click(locator.createapibutton);
//     I.see('Not connected');
// }).tag('@accounts');
// Scenario('@accounts api delete ', async({ I, loginAs }) => {
//     //loginAs('admin_staging');
//     //I.grabCookie();
//     I.amOnPage('/api-keys');
//     I.click(locator.apikeymenu);
//     I.click(locator.createapibutton);
//     I.see('Not connected');
//     I.click(locator.firstdelete);
//     I.click('Yes');
//     I.see('API Key Deleted Successfully.');
// }).tag('@accounts');
// Scenario('@accounts profile update ', async({ I, loginAs }) => {
//     I.grabCookie();
//     // loginAs('admin_staging');
//     I.click(locator.profilemenu);
//     I.click('Account');
//     I.clearField('First Name');
//     I.fillField('First Name', 'Alvi');
//     I.clearField('Last Name');
//     I.fillField('Last Name', 'Tazwar');
//     I.click('Update Profile');
//     I.see('Profile updated successfully!');
// }).tag('@accounts');
// Scenario('@accounts Integration', async({ I, loginAs }) => {
//     I.grabCookie();
//     //loginAs('admin_staging');
//     I.amOnPage('/');
//     I.click(locator.integrationmenu);
//     I.seeElementInDOM(locator.mailchimpdiv);
//     I.seeElementInDOM(locator.wemaildiv);
//     I.seeElementInDOM(locator.mailjetdiv);
//     I.seeElementInDOM(locator.envatodiv);
//     I.seeElementInDOM(locator.githubdiv);
//     I.seeElementInDOM(locator.bitbucketdiv);
//     I.seeElementInDOM(locator.gitlabdiv);
//     I.seeElementInDOM(locator.wordpressdiv);
//     I.seeElementInDOM(locator.fastspringdiv);
//     I.seeElementInDOM(locator.paddlediv);
//     I.seeElementInDOM(locator.gumroadiv);
//     I.seeElementInDOM(locator.helpscoutdiv).then((result) => {
//         console.log('All elements are loaded successfully');
//     });
// }).tag('@accounts');