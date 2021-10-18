"use strict";

Feature('Appsero Analytics Explore');

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var locator = require('../analytics/analytics_locator_test.js.js.js');

Scenario('@explore_analytics release test', function _callee(_ref) {
    var I;
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    I = _ref.I;
                    loginAs('admin_staging');
                    I.amOnPage('/plugins');
                    I.click('envato plg test'); //Fastspring_affiliate2
                    // I.seeElement(locator.PremiumModal);
                    // I.click(locator.SkipBilling);

                    I.waitForVisible(locator.Analytics);
                    I.click(locator.Analytics); //I.click(locator.StatsMenu);

                    I.click(locator.SitesMenu);
                    tryTo(function() {
                        return I.grabTextFrom(locator.UnknMsg);
                    }); //tryTo(() => strict.equal(await I.grabTextFrom(locator.UnknMsg), 'Unknown error occurres.'));

                    _context.t0 = strict;
                    _context.next = 11;
                    return regeneratorRuntime.awrap(I.grabTextFrom(locator.UnknMsg));

                case 11:
                    _context.t1 = _context.sent;

                    _context.t0.notEqual.call(_context.t0, _context.t1, 'Unknown error occurred.');

                    // let txt = await I.grabTextFrom(locator.UnknMsg);
                    // I.dontSeeInSource(txt);
                    // let res = await tryTo(() => I.see(txt));
                    // console.log(res);
                    //strict.ok(res, "Demo");
                    //strict.equal(txt, 'Unknown error occurred.');
                    I.wait(3); //console.log(txt);
                    // I.dontSeeElement('//div[@class="ant-message"]//div[@class="ant-message-custom-content ant-message-error"]/span[.="Unknown error occurred."]', 5);
                    // I.wait(5);
                    //I.seeElementInDOM(locator.MainContentAnalytics);
                    // I.seeElementInDOM('div.ant-table.appsero-table-default.sites-table.appsero-responsive-table > table');
                    // I.seeElementInDOM(locator.SkippedUser);
                    // I.seeElementInDOM(locator.Deactivation);
                    // pause()
                    // anticon anticon.close.circle

                case 14:
                case "end":
                    return _context.stop();
            }
        }
    });
}).tag('@explore_analytics');