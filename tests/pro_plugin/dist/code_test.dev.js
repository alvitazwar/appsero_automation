"use strict";

Feature('All the test codes are held');

var slugify = require('slugify');

var faker = require('faker');

Scenario('Experiment ZOne', function _callee(_ref) {
  var I, i, city;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;

          for (i = 0; i <= 1; i++) {
            // var variable = faker.datatype.number({ min: 10, max: 20 });
            // var slug_var = faker.datatype.uuid(10);
            // var seeds = faker.seed(142);
            city = Date(); // console.log('The value of variable', variable);
            // console.log('the value of slug', slug_var);

            console.log('I am currently in', city);
          }

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});