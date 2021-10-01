"use strict";

Feature('Appsero');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics deactivations report export', function _callee(_ref) {
  var I, loginAs, va;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin_staging');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.waitForVisible(locator.Analytics, 5);
          I.click(locator.Analytics);
          I.click(locator.DeactMenu);
          I.click('Export');
          va = locator.deactthemechckbox.getProperty('checked').jsonValue();
          console.log('Check initial state value', va); // I.checkOption(locator.deactthemechckbox);
          // I.checkOption(locator.deatclientemailchkbox);
          // I.click(locator.deactexportbtn);
          // I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
          //     console.log("Message is Showing Correctly");
          // }).catch((err) => {
          //     console.log("Message fetching failed");
          // });

          I.wait(4);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@analytics');