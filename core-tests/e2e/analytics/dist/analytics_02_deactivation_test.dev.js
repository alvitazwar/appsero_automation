"use strict";

Feature('Appsero Analytics Functional Test');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('./analytics_locator_test.js');

Scenario('@analytics deactivations report export', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          loginAs('admin');
          I.amOnPage('/plugins');
          I.Selectplugin();
          I.waitForVisible(locator.Analytics, 5);
          I.click(locator.Analytics);
          I.click(locator.DeactMenu);
          I.click('Export'); //const va = (locator.deactthemechckbox).getProperty('checked').jsonValue();
          //console.log('Check initial state value', va);
          // I.checkOption(locator.deactthemechckbox);
          // I.checkOption(locator.deatclientemailchkbox);
          // I.click(locator.deactexportbtn);
          // I.seeTextEquals('The request has been submitted', locator.RequestMsg).then((result) => {
          //     console.log("Message is Showing Correctly");
          // }).catch((err) => {
          //     console.log("Message fetching failed");
          // });

          I.usePuppeteerTo('button', function _callee(_ref2) {
            var page, browser, checkbox_theme, initial_val;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(page.waitForSelector('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input'));

                  case 3:
                    _context.next = 5;
                    return regeneratorRuntime.awrap(page.$('div > div.ant-modal-content > div > div.mb-8 > label > span.ant-checkbox > input'));

                  case 5:
                    checkbox_theme = _context.sent;
                    _context.t0 = regeneratorRuntime;
                    _context.next = 9;
                    return regeneratorRuntime.awrap(checkbox_theme.getProperty('checked'));

                  case 9:
                    _context.t1 = _context.sent.jsonValue();
                    _context.next = 12;
                    return _context.t0.awrap.call(_context.t0, _context.t1);

                  case 12:
                    initial_val = _context.sent;
                    console.log('initial state', initial_val);

                    if (!(initial_val == false)) {
                      _context.next = 17;
                      break;
                    }

                    _context.next = 17;
                    return regeneratorRuntime.awrap(checkbox_theme.click());

                  case 17:
                    _context.t2 = console;
                    _context.t3 = regeneratorRuntime;
                    _context.next = 21;
                    return regeneratorRuntime.awrap(checkbox_theme.getProperty('checked'));

                  case 21:
                    _context.t4 = _context.sent.jsonValue();
                    _context.next = 24;
                    return _context.t3.awrap.call(_context.t3, _context.t4);

                  case 24:
                    _context.t5 = _context.sent;

                    _context.t2.log.call(_context.t2, 'after the click the value', _context.t5);

                  case 26:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.wait(4);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@analytics');