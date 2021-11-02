"use strict";

Feature('Fastspring Single Orderrefund');

var payload = require('./fastspring_payload');

require('dotenv').config();

var _require = require('../../../utils'),
    env = _require.env;

Scenario('Fastspring Single order Placeref', function _callee(_ref) {
  var I, loginAs, data, load, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = payload.getFakerData();
          load = payload.getFullRefund(data);
          _context.next = 5;
          return regeneratorRuntime.awrap(I.sendPostRequest(env('FASTSPRING'), load));

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
}).tag('@fastspring');