"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var faker = require('faker');

Feature('cover');
Scenario('photo', function _callee2(_ref) {
  var I, msg, get_message;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;
          I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
          I.fillField('Username', 'demo');
          I.fillField('Password', 'demo');
          I.click('Log In');
          I.click('#user-xprofile');
          I.click('#change-cover-image');
          I.usePuppeteerTo('upload action', function _callee(_ref2) {
            var page, browser, _ref3, _ref4, fileChooser;

            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('#bp-browse-button')]));

                  case 3:
                    _ref3 = _context.sent;
                    _ref4 = _slicedToArray(_ref3, 1);
                    fileChooser = _ref4[0];
                    _context.next = 8;
                    return regeneratorRuntime.awrap(fileChooser.accept(['data/img.png']));

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
          msg = 'Your new cover image was uploaded successfully.';
          get_message = I.grabTextFrom('#bp-cover-image-feedback');

          if (get_message == msg) {
            console.log('file is updated successfully');
          }

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
});