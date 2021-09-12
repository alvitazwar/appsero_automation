"use strict";

var puppeteer = require('puppeteer');

Feature('puppetteeer'); // (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://qa.rtcamp.net/members/demo/media/1651/');
//     await page.goto('https://staging.appsero.com');
//     // other actions...
//     await browser.close();
// });

Scenario('aTest', function _callee2(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I;
          I.usePuppeteerTo('emulate offline mode', function _callee(_ref2) {
            var page, browser, inputUploadHandle, fileToUpload;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    page = _ref2.page, browser = _ref2.browser;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(page["goto"]('https://qa.rtcamp.net/members/demo/media/album/'));

                  case 3:
                    _context.next = 5;
                    return regeneratorRuntime.awrap(page.$eval('#bp-login-widget-user-login', function (el) {
                      return el.value = 'demo';
                    }));

                  case 5:
                    _context.next = 7;
                    return regeneratorRuntime.awrap(page.$eval('#bp-login-widget-user-pass', function (el) {
                      return el.value = 'demo';
                    }));

                  case 7:
                    _context.next = 9;
                    return regeneratorRuntime.awrap(page.click('#bp-login-widget-submit'));

                  case 9:
                    _context.next = 11;
                    return regeneratorRuntime.awrap(page["goto"]('https://qa.rtcamp.net/members/demo/media/1651/'));

                  case 11:
                    _context.next = 13;
                    return regeneratorRuntime.awrap(page.waitForSelector('#rtMedia-upload-button'));

                  case 13:
                    _context.next = 15;
                    return regeneratorRuntime.awrap(page.$('#rtMedia-upload-button'));

                  case 15:
                    inputUploadHandle = _context.sent;
                    // prepare file to upload, I'm using test_to_upload.jpg file on same directory as this script
                    // Photo by Ave Calvar Martinez from Pexels https://www.pexels.com/photo/lighthouse-3361704/
                    fileToUpload = 'data/img.png'; // Sets the value of the file input to fileToUpload

                    inputUploadHandle.uploadFile(fileToUpload); // doing click on button to trigger upload file

                    _context.next = 20;
                    return regeneratorRuntime.awrap(page.waitForSelector('#drag-drop-area > input'));

                  case 20:
                    _context.next = 22;
                    return regeneratorRuntime.awrap(page.evaluate(function () {
                      return document.getElementById('#drag-drop-area > input').click();
                    }));

                  case 22:
                    _context.next = 24;
                    return regeneratorRuntime.awrap(browser.close());

                  case 24:
                  case "end":
                    return _context.stop();
                }
              }
            });
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});