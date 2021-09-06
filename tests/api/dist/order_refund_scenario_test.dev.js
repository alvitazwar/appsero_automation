"use strict";

var faker = require('faker');

var payload = require('./payload');

Feature('Order create and refund');
Scenario('Add & Deactivate Track', function _callee(_ref) {
  var I, i, data, data_order, data_ref, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          i = 1;

        case 2:
          if (!(i <= 2)) {
            _context.next = 17;
            break;
          }

          data = payload.getFakerData();
          data_order = payload.getFastSpringOrder(data);
          data_ref = payload.getRefund(data);

          if (!(i % 2 == 0)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_order).then(function (res) {
            I.assertEqual(res.status, 200);

            if (res.status == 200) {
              dec = I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_ref).then(function (res) {
                I.assertEqual(res.status, 200);
              });
            }
          }));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(I.sendPostRequest('/webhook/fastspring/7d494986-fe98-413e-b671-565a8dfaae30', data_order).then(function (res) {
            I.assertEqual(res.status, 200);
            console.log(res.data);
          }));

        case 13:
          res = _context.sent;

        case 14:
          i++;
          _context.next = 2;
          break;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
});