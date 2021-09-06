"use strict";

Feature('Basic API Check');
Scenario('Check Login API', function _callee(_ref) {
  var I, data, res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          data = {
            "email": "atd.mondol@gmail.com",
            "password": "appsero@4321"
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(I.sendPostRequest('/login', data));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(I.assertEqual(res.status, 200));

        case 7:
          console.log(res.data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
Scenario('Check Single Plugin Details', function _callee2(_ref2) {
  var I, res;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref2.I;
          _context2.next = 3;
          return regeneratorRuntime.awrap(I.sendGetRequest('/v1/plugins/fastspring-license-subs'));

        case 3:
          res = _context2.sent;
          console.log(res.data);
          _context2.next = 7;
          return regeneratorRuntime.awrap(I.assertEqual(res.status, 200));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
});
Scenario('Check All plugin Details', function _callee3(_ref3) {
  var I, res;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I = _ref3.I;
          _context3.next = 3;
          return regeneratorRuntime.awrap(I.sendGetRequest('/v1/plugins?page=1'));

        case 3:
          res = _context3.sent;
          console.log(res.data.data); //console.log(JSON.stringify(res.data.data));
          // console.log(JSON.stringify(res));

          _context3.next = 7;
          return regeneratorRuntime.awrap(I.assertEqual(res.status, 200));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});