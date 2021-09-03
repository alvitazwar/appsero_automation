"use strict";

var faker = require('faker');

var payload = require('./payload');

Feature('Add Tracking');
Scenario('Add Data', function _callee(_ref) {
  var I, i, demo, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          i = 1;

        case 2:
          if (!(i <= 10)) {
            _context.next = 16;
            break;
          }

          demo = payload.getTrackingInfo();

          if (!(i % 2 == 0)) {
            _context.next = 10;
            break;
          }

          _context.next = 7;
          return regeneratorRuntime.awrap(I.sendPostRequest('https://api.appsero.com/track', demo).then(function (res) {
            I.assertEqual(res.status, 200);
          }));

        case 7:
          setTimeout(function () {
            dec = I.sendPostRequest('https://api.appsero.com/deactivate', demo).then(function (res) {
              I.assertEqual(res.status, 200);
            });
          }, 5000);
          _context.next = 13;
          break;

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(I.sendPostRequest('https://api.appsero.com/track', demo));

        case 12:
          res = _context.sent;

        case 13:
          i++;
          _context.next = 2;
          break;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
});