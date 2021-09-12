"use strict";

var faker = require('faker');

Feature('test like');
Scenario('like', function _callee(_ref) {
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
          I.click('//*[@id="1656"]/a/div[1]');
          I.forceClick('div.rtmedia-item-comments > div.rtmedia-actions-before-comments.clearfix > div > span > form > button').then(console.log('liked media successfully'));
          I.see('Unlike');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});