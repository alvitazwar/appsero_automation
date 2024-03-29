"use strict";

Feature('Paddle Single Order test');

var payload = require('./paddle_payload');

Scenario('Paddle Single order Place', function _callee(_ref) {
  var I, loginAs, data, load, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = payload.getFakerData();
          load = payload.getPaddleSingleOrder(data);
          _context.next = 5;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', load));

        case 5:
          res = _context.sent;
          console.log(res);
          I.assertEqual(res.status, 200);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});