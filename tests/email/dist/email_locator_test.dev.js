"use strict";

var _inject = inject(),
    I = _inject.I;

module.exports = {
  EmailMenu: 'div > div:nth-child(2) > div > ul > li:nth-child(9) > div',
  EmailDigest: 'ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1)',
  Frequency: '//*[@id="frequency"]/div/div',
  FrequencyWeekly: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]',
  SendOn: '//*[@id="send_on"]/div/div',
  SendOnFriday: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]'
};