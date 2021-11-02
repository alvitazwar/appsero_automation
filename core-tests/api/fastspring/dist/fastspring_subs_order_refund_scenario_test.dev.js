"use strict";

var faker = require('faker');

var payload = require('./fastspring_payload');

require('dotenv').config();

var _require = require('../../../utils'),
    env = _require.env;

Feature('Subscription order & refund');
Scenario('Subscription type product order and return', function _callee(_ref) {
  var I, loginAs, _loop, i;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;

          _loop = function _loop(i) {
            var data, data_order, data_ref, res;
            return regeneratorRuntime.async(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    data = payload.getFakerData();
                    data_order = payload.getFastspringSubsorder(data);
                    data_ref = payload.getFastspringSubreturn(data);

                    if (!(i % 2 == 0)) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 6;
                    return regeneratorRuntime.awrap(I.sendPostRequest(env('FASTSPRING'), data_order).then(function (res) {
                      I.assertEqual(res.status, 200);

                      if (res.status == 200) {
                        I.wait(5);
                        dec = I.sendPostRequest(env('FASTSPRING'), data_ref).then(function (res) {
                          I.assertEqual(res.status, 200);
                        });
                      }
                    }));

                  case 6:
                    _context.next = 11;
                    break;

                  case 8:
                    _context.next = 10;
                    return regeneratorRuntime.awrap(I.sendPostRequest(env('FASTSPRING'), data_order).then(function (res) {
                      I.assertEqual(res.status, 200);
                      console.log(res.data);
                    }));

                  case 10:
                    res = _context.sent;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          i = 1;

        case 3:
          if (!(i <= 2)) {
            _context2.next = 9;
            break;
          }

          _context2.next = 6;
          return regeneratorRuntime.awrap(_loop(i));

        case 6:
          i++;
          _context2.next = 3;
          break;

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}).tag('@fastspring');