"use strict";

var faker = require('faker');

Feature('test upload');
Scenario('upload file', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
          I.fillField('Username', 'demo');
          I.fillField('Password', 'demo');
          I.click('Log In');
          I.click('#rtm_show_upload_ui');
          I.ImageUpload();
          I.amOnPage('https://qa.rtcamp.net/members/demo/media/1651/');
          I.wait(4);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});