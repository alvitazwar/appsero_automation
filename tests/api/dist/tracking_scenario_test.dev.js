"use strict";

var faker = require('faker');

var payload = require('./payload');

Feature('Appsero Analytics');
Scenario('Site activate and Deactivate Scenario', function _callee(_ref) {
  var I, loginAs, _loop, i;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref.I, loginAs = _ref.loginAs;

          _loop = function _loop(i) {
            var fake_data, getrack, res;
            return regeneratorRuntime.async(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    fake_data = payload.getFakerData();
                    getrack = payload.getTrackingInfo(fake_data);

                    if (!(i % 2 == 0)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return regeneratorRuntime.awrap(I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/track', getrack).then(function (res) {
                      I.assertEqual(res.status, 200);
                      console.log(res.data);

                      if (res.status == 200) {
                        I.wait(3);
                        I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/deactivate', getrack).then(function (res) {
                          I.assertEqual(res.status, 200);
                          console.log(res.data);
                        });
                      }
                    }));

                  case 5:
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return regeneratorRuntime.awrap(I.sendPostRequest('http://a1fa-103-108-147-143.ngrok.io/track', getrack).then(function (res) {
                      I.assertEqual(res.status, 200);
                      console.log(res.data);
                    }));

                  case 9:
                    res = _context.sent;

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          i = 1;

        case 3:
          if (!(i <= 30)) {
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
});