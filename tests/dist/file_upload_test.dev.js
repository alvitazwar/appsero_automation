"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var puppeteer = require('puppeteer');

Feature('File Upload Test');
Scenario('Upload a file in Appsero', function _callee(_ref) {
  var I, browser, page, _ref2, _ref3, fileChooser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          _context.next = 3;
          return regeneratorRuntime.awrap(puppeteer.launch({
            "headless": false,
            "slowMo": 50
          }));

        case 3:
          browser = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(browser.newPage());

        case 6:
          page = _context.sent;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('FastSpring_License_subs');
          I.click('Releases');
          I.click('Create a New Release');
          I.fillField('Version', '1.1');
          I.click('#release_date > div > input');
          I.click('Today', 'div > div.ant-calendar-date-panel > div.ant-calendar-footer > span > a');
          I.fillField('Changelog', 'Test New File upload');
          I.checkOption(' div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input'); // I.waitForEnabled('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button');
          // I.waitForClickable('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button');

          I.attachFile('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button', 'data/fastspring_license_subs.zip');
          I.wait(3);
          _context.next = 21;
          return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('span[role="button"] > .ant-btnspan[role="button"] > .ant-btn')]));

        case 21:
          _ref2 = _context.sent;
          _ref3 = _slicedToArray(_ref2, 1);
          fileChooser = _ref3[0];
          _context.next = 26;
          return regeneratorRuntime.awrap(fileChooser.accept(['data/fastspring_license_subs.zip']));

        case 26:
          _context.next = 28;
          return regeneratorRuntime.awrap(browser.close());

        case 28:
        case "end":
          return _context.stop();
      }
    }
  });
});