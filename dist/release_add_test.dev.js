"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Feature('Appsero');

var faker = require('faker');

Scenario('login test', function _callee2(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;
          I.loginAsAdmin();
          I.amOnPage('/plugins');
          I.click('Releases');
          I.click('Add New Release');
          I.fillField('Version', faker.random["float"]({
            min: 1.0,
            max: 2.0
          }));
          I.click('//*[@id="release_date"]/div/input');
          I.click('//div[4]/div/div/div/div/div[2]/div[2]/table/tbody/tr[5]/td[4]/div');
          I.fillField('Changelog', faker.random.words(10));
          I.usePuppeteerTo('upload action', function _callee(_ref2) {
            var page, browser, _ref3, _ref4, fileChooser;

            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('div.ant-col.ant-form-item-control-wrapper > div > span > span > div > span > button')]));

                  case 3:
                    _ref3 = _context.sent;
                    _ref4 = _slicedToArray(_ref3, 1);
                    fileChooser = _ref4[0];
                    _context.next = 8;
                    return regeneratorRuntime.awrap(fileChooser.accept(['data/fastspring_license_subs.zip']));

                  case 8:
                    _context.next = 10;
                    return regeneratorRuntime.awrap(page.waitForTimeout(5000));

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.click('div > label > span.ant-checkbox.ant-checkbox-checked > input');
          I.click('div > div.ant-modal-content > div.ant-modal-footer > button');

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  });
});