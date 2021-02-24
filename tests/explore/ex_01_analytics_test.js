Feature('Appsero Analytics Explore');
const locator = require('tests/analytics/analytics_locator_test.js');

Scenario('@explore_analytics release test', async({ I }) => {

    I.loginAsAdmin();
    I.amOnPage('/plugins');
    I.click('envato plg test');
    I.click('Analytics');
    I.click(locator.StatsMenu);

}).tag('@explore_analytics');