"use strict";

var locator = require('../email/email_locator_test.js');

var _inject = inject(),
    I = _inject.I;

module.exports = {
  range: function range(limit, callback) {
    var data = [];

    for (var i = 1; i <= limit; i++) {
      data.push(callback());
    }

    return data;
  },
  enablefuntion: function enablefuntion() {
    I.click(locator.SwitchBtn);
    I.wait(2); // I.see('Deactivation auto responder enabled successfully');
    //I.valid_email();
    //I.click('Update');
    //I.wait(2);
    //I.see('Reply to email updated successfully');
  }
};