"use strict";

module.exports = {
  env: function env(envVariable) {
    return process.env["".concat(process.env.TESTING_ENV, "_").concat(envVariable)];
  }
};