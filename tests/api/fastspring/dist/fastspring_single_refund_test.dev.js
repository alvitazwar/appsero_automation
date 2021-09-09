"use strict";

Feature('Fastspring Single Orderrefund');

var payload = require('./fastspring_payload');

Scenario('Fastspring Single order Placeref', function _callee(_ref) {
  var I, load, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          load = payload.getRefund();
          _context.next = 4;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', load));

        case 4:
          res = _context.sent;
          console.log(res);
          I.assertEqual(res.status, 200);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});