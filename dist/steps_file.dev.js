"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// in this file you can append custom step methods to 'I' object
var Factory = require('rosie');

var faker = require('faker');

module.exports = function () {
  return actor({
    getfakepass: function getfakepass() {
      return data = {
        oldpass: faker.internet.password(),
        nwpass: faker.internet.password(),
        old2pass: nwpass
      };
    },
    Selectplugin: function Selectplugin() {
      this.click('FastSpring_License_subs');
    },
    loginAsAdmin: function loginAsAdmin() {
      this.amOnPage('/login'); //this.click('Log in');

      this.fillField('Email Address', 'atd.mondol@gmail.com'); //

      this.fillField('Password', 'appsero@4321');
      this.click('Log in');
      this.see('Plugins');
    },
    loginAsAdminProduction: function loginAsAdminProduction() {
      this.amOnPage('https://dashboard.appsero.com/login'); //this.click('Log in');

      this.fillField('Email Address', 'atd.mondol@gmail.com'); //

      this.fillField('Password', 'alvi@4321');
      this.click('Log in');
      this.see('Plugins');
    },
    checkError: function checkError() {
      this.dontSee('Unknown error occurred.');
      this.dontSee('Warning');
      this.dontSee('Fatal error');
      this.dontSee('Notice:');
    },
    metadataCreate: function metadataCreate() {
      this.fillField('Name', faker.name.firstName());
    },
    metadataPlugin: function metadataPlugin() {
      this.fillField('Plugin Name', faker.name.title());
    },
    metadataVersion: function metadataVersion() {
      this.fillField('Plugin Version', faker.random["float"]({
        min: 1.0,
        max: 2.0
      }));
    },
    metadataPHP: function metadataPHP() {
      this.click('//*[@id="php"]/div/div');
      this.fillField('//*[@id="php"]/div/div', faker.random.arrayElement(["7.1", "7.2", "7.3", "7.4"]));
    },
    metadataWordpress: function metadataWordpress() {
      this.click('//*[@id="requires"]/div/div');
      this.fillField('//*[@id="requires"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));
    },
    metadataTested: function metadataTested() {
      this.click('//*[@id="tested"]/div/div');
      this.fillField('//*[@id="tested"]/div/div', faker.random.arrayElement(["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"]));
    },
    valid_email: function valid_email() {
      this.clearField('//*[@id="app"]//div/span/input');
      this.fillField('//*[@id="app"]//div/span/input', faker.internet.email());
    },
    objecttest: function objecttest() {},
    ImageUpload: function ImageUpload() {
      this.usePuppeteerTo('upload action', function _callee(_ref) {
        var page, browser, _ref2, _ref3, fileChooser;

        return regeneratorRuntime.async(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _ref.page, browser = _ref.browser;
                _context.next = 3;
                return regeneratorRuntime.awrap(Promise.all([page.waitForFileChooser(), page.click('#rtMedia-upload-button')]));

              case 3:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 1);
                fileChooser = _ref3[0];
                _context.next = 8;
                return regeneratorRuntime.awrap(fileChooser.accept(['data/img.png']));

              case 8:
                _context.next = 10;
                return regeneratorRuntime.awrap(page.waitForSelector('#drag-drop-area > input'));

              case 10:
                _context.next = 12;
                return regeneratorRuntime.awrap(page.click('#drag-drop-area > input'));

              case 12:
                _context.next = 14;
                return regeneratorRuntime.awrap(page.waitForTimeout(5000));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        });
      });
    } // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
};