"use strict";

Feature('Fastspring subscription Order test');

var payload = require('./fastspring_payload');

require('dotenv').config();

var _require = require('../../../utils'),
    env = _require.env;

Scenario('Fastspring subscription variation upgrade order create', function _callee(_ref) {
  var I, loginAs, data, load, variation, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;
          data = payload.getFakerData();
          load = payload.getFastspringSubsorder(data);
          variation = payload.getvariationproduct(data);
          _context.next = 6;
          return regeneratorRuntime.awrap(I.sendPostRequest(env('FASTSPRING'), load).then(function (res) {
            I.assertEqual(res.status, 200);

            if (res.status == 200) {
              I.wait(5);
              dec = I.sendPostRequest(env('FASTSPRING'), variation).then(function (res) {
                I.assertEqual(res.status, 200);
              });
            }
          }));

        case 6:
          res = _context.sent;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}).tag('@fastspring');