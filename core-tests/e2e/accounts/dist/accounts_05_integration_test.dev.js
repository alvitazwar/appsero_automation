"use strict";

var locator = require('./accounts_locator_test');

Feature('Appsero Accounts');
Scenario('@accounts Integration', function _callee(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          // loginAs('admin_staging');
          I.amOnPage('/');
          I.click(locator.integrationmenu);
          I.seeElementInDOM(locator.mailchimpdiv);
          I.seeElementInDOM(locator.wemaildiv);
          I.seeElementInDOM(locator.mailjetdiv);
          I.seeElementInDOM(locator.envatodiv);
          I.seeElementInDOM(locator.githubdiv);
          I.seeElementInDOM(locator.bitbucketdiv);
          I.seeElementInDOM(locator.gitlabdiv);
          I.seeElementInDOM(locator.wordpressdiv);
          I.seeElementInDOM(locator.fastspringdiv);
          I.seeElementInDOM(locator.paddlediv);
          I.seeElementInDOM(locator.gumroadiv);
          I.seeElementInDOM(locator.helpscoutdiv).then(function (result) {
            console.log('All elements are loaded successfully');
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@accounts');