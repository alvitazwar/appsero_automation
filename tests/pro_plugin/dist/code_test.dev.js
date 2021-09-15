"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true;
        _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var puppeteer = require('puppeteer');

Feature('Appsero'); // const { ifError, strict } = require("assert");
// const { assert } = require("console");

var faker = require('faker'); // const cry = require('crypto');
// Scenario('test', async({ I, loginAs }) => {
//     for (let i = 0; i <= 3; i++) {
//         var data = cry.randomBytes(10).toString("hex");
//         //console.log(data);
//         var fake = faker.random.alphaNumeric(20);
//         console.log(fake);
//     }
// });


Scenario('Test', function _callee2(_ref) {
    var I;
    return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    I = _ref.I;
                    // I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
                    // I.fillField('Username', 'demo');
                    // I.fillField('Password', 'demo');
                    // I.click('Log In');
                    // I.click('#rtm_show_upload_ui');
                    // I.waitForClickable('#rtMedia-upload-button', 10);
                    // I.attachFile('#rtMedia-upload-button', "data/img.png");
                    // I.attachFile('#rtMedia-upload-button', 'data/img.png');
                    // I.click('#rtMedia-upload-button');
                    // I.wait(4);
                    // I.click('Start upload');
                    I.usePuppeteerTo('emulate offline mode', function _callee(_ref2) {
                        var page, browser, _ref3, _ref4, fileChooser;

                        return regeneratorRuntime.async(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        page = _ref2.page, browser = _ref2.browser;
                                        _context.prev = 1;
                                        _context.next = 4;
                                        return regeneratorRuntime.awrap(page["goto"]('https://qa.rtcamp.net/members/demo/media/1651'));

                                    case 4:
                                        _context.next = 6;
                                        return regeneratorRuntime.awrap(page.type('#bp-login-widget-user-login', 'demo', {
                                            delay: 100
                                        }));

                                    case 6:
                                        _context.next = 8;
                                        return regeneratorRuntime.awrap(page.type('#bp-login-widget-user-pass', 'demo', {
                                            delay: 100
                                        }));

                                    case 8:
                                        _context.next = 10;
                                        return regeneratorRuntime.awrap(page.click('#bp-login-widget-submit'));

                                    case 10:
                                        _context.next = 15;
                                        break;

                                    case 12:
                                        _context.prev = 12;
                                        _context.t0 = _context["catch"](1);
                                        console.log(_context.t0);

                                    case 15:
                                        _context.next = 17;
                                        return regeneratorRuntime.awrap(page.waitForSelector('#rtm_show_upload_ui'));

                                    case 17:
                                        _context.next = 19;
                                        return regeneratorRuntime.awrap(page.click('#rtm_show_upload_ui'));

                                    case 19:
                                        _context.next = 21;
                                        return regeneratorRuntime.awrap(page.waitForSelector('#rtMedia-upload-button'));

                                    case 21:
                                        _context.next = 23;
                                        return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('#rtMedia-upload-button')]));

                                    case 23:
                                        _ref3 = _context.sent;
                                        _ref4 = _slicedToArray(_ref3, 1);
                                        fileChooser = _ref4[0];
                                        _context.next = 28;
                                        return regeneratorRuntime.awrap(fileChooser.accept(['data/img.png']));

                                    case 28:
                                        _context.next = 30;
                                        return regeneratorRuntime.awrap(page.waitForSelector('#drag-drop-area > input'));

                                    case 30:
                                        _context.next = 32;
                                        return regeneratorRuntime.awrap(page.click('#drag-drop-area > input'));

                                    case 32:
                                        _context.next = 34;
                                        return regeneratorRuntime.awrap(page.waitForTimeout(5000));

                                    case 34:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, null, null, [
                            [1, 12]
                        ]);
                    });

                case 2:
                case "end":
                    return _context2.stop();
            }
        }
    });
});