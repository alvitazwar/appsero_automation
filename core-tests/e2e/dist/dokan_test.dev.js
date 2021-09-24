"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

Feature('Appsero');

var puppeteer = require('puppeteer');

var faker = require('faker');

Scenario('release test', function _callee2(_ref) {
  var I, loginAs;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          I.amOnPage('http://dokan-pro.test/my-account/');
          I.fillField('username', 'admin');
          I.fillField('password', 'admin');
          I.click('form > p:nth-child(4) > button');
          I.amOnPage('http://dokan-pro.test/product/celia/edit/');
          I.click('div.dokan-feat-image-upload.dokan-new-product-featured-img > div.instruction-inside > a');
          I.usePuppeteerTo('upload action', function _callee(_ref2) {
            var page, browser, _ref3, _ref4, fileChooser;

            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.waitForSelector('#__wp-uploader-id-1'), page.click('#__wp-uploader-id-1')]));

                  case 3:
                    _ref3 = _context.sent;
                    _ref4 = _slicedToArray(_ref3, 1);
                    fileChooser = _ref4[0];
                    _context.next = 8;
                    return regeneratorRuntime.awrap(fileChooser.accept(['data/img.png']));

                  case 8:
                    _context.next = 10;
                    return regeneratorRuntime.awrap(page.waitForTimeout(10000));

                  case 10:
                    _context.next = 12;
                    return regeneratorRuntime.awrap(page.waitForSelector('div > div.media-toolbar-primary.search-form > button'));

                  case 12:
                    ;
                    _context.next = 15;
                    return regeneratorRuntime.awrap(page.click('div > div.media-toolbar-primary.search-form > button'));

                  case 15:
                    _context.next = 17;
                    return regeneratorRuntime.awrap(page.waitForTimeout(2000));

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          I.click('div > form > input.dokan-btn.dokan-btn-theme.dokan-btn-lg.dokan-right'); // I.click('div.ant-modal-content > div.ant-modal-footer > div > label > span.ant-checkbox > input');
          // I.click('div > div.ant-modal-content > div.ant-modal-footer > button');
          //}

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
});