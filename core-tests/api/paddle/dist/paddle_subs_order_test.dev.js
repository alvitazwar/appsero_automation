"use strict";

Feature('Paddle Subs order');

var payload = require('./paddle_payload');

Scenario('Paddle subscription purchase scenario', function _callee(_ref) {
  var I, loginAs, data, load, succ, res, payment;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = payload.getFakerData();
          load = payload.getSubsCreateOrder(data);
          succ = payload.getSubsPaymentSucceed(data);
          _context.next = 6;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', load));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/paddle/7d494986-fe98-413e-b671-565a8dfaae30', succ));

        case 9:
          payment = _context.sent;
          console.log(payment);
          console.log(res);
          I.assertEqual(res.status, 200);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
});