"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var faker = require('faker');

Feature('test upload');
Scenario('upload file', function _callee2(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;
          I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
          I.fillField('Username', 'demo');
          I.fillField('Password', 'demo');
          I.click('Log In');
          I.waitForClickable('#rtm_show_upload_ui', 3);
          I.click('#rtm_show_upload_ui');
          I.usePuppeteerTo('upload action', function _callee(_ref2) {
            var page, browser, _ref3, _ref4, fileChooser;

            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('#rtMedia-upload-button')]));

                  case 3:
                    _ref3 = _context.sent;
                    _ref4 = _slicedToArray(_ref3, 1);
                    fileChooser = _ref4[0];
                    _context.next = 8;
                    return regeneratorRuntime.awrap(fileChooser.accept(['data/img1.jpeg', 'data/img2.png', 'data/img3.png', 'data/img4.png', 'data/img5.png']));

                  case 8:
                    _context.next = 10;
                    return regeneratorRuntime.awrap(page.waitForSelector('#drag-drop-area > input'));

                  case 10:
                    //await page.click('#drag-drop-area > input');
                    I.click('#drag-drop-area > input').then(function (result) {
                      I.wait(10);
                    })["catch"](function (error) {
                      console.log(error);
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });
          console.log('success'); //I.ImageUpload();
          //I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
          //I.wait(2);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
});