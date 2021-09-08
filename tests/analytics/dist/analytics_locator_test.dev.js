"use strict";

var _inject = inject(),
    I = _inject.I;

module.exports = {
  Analytics: 'li:nth-of-type(2) > .ant-menu-submenu-title',
  StatsMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1) > a',
  MainContentAnalytics: '#app > section > section > main',
  RequestMsg: 'div > div > div > div.ant-notification-notice-message',
  OptinUser: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(1) > div',
  SkippedUser: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(2) > div',
  Deactivation: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(3) > div',
  MySqlVersion: 'main > div > div:nth-child(6) > div:nth-child(1) > div',
  SitesMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(2) > a',
  SitesTable: 'div.ant-table.appsero-table-default.sites-table.appsero-responsive-table',
  ExportBtn: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between.table-filters > div:nth-child(2) > button',
  SiteExportoggle: 'div > form > div:nth-child(1) > div > div > span > button',
  SiteExportBtn: ' div > div.ant-modal-content > div > div > button',
  SiteDrpDwn: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between.table-filters > div:nth-child(1) > div > div > div',
  StatusDrpDwn: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between.table-filters > div:nth-child(2) > div > div > div',
  UnknMsg: '//div[@class="ant-message"]//div[@class="ant-message-custom-content ant-message-error"]/span[.="Unknown error occurred."]',
  PremiumModal: 'div.ant-modal-wrap > div > div.ant-modal-content > div',
  SkipBilling: 'button.ant-btn.ant-btn-default.ant-btn-lg',
  UserMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(3) > a',
  UserTable: 'div.ant-table.appsero-table-default.users-table.appsero-responsive-table > table',
  DeactMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(4) > a',
  DeactFilter: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between.table-filters > div.mb-xs-only-15',
  DeactChart: '#app > section > section > main > div > div.mb-30 > div',
  DeactTable: 'div.ant-table.appsero-table-default.users-table.deactivations-table.appsero-responsive-table > table',
  // Sales Locator
  Sales: 'div:nth-child(2) > div > ul > li:nth-child(3) > div > span',
  Overview: 'div:nth-child(2) > div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1) > a',
  Overview_Calender: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between > div > span',
  Overview_Active_Sub: ' div:nth-child(4) > div:nth-child(3) > div > div:nth-child(1) > p',
  Overview_Renewal_Order: 'div:nth-child(4) > div:nth-child(2) > div > div:nth-child(1) > p',
  Orders: '//li[2]/a[@href="/plugins/fastspring-license-subs/sales/orders"]',
  Orders_Search: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between > div > div:nth-child(1) > span > input',
  Orders_Create_btn: ' div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between > div > div:nth-child(3) > div > button',
  Customer: 'div:nth-child(2) > div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(4) > a',
  //Deactivation Locator
  deactthemechckbox: ' div.ant-modal-content > div > div.mb-8 > label > span:nth-child(2)',
  deatclientemailchkbox: 'div.ant-modal-content > div > div:nth-child(3) > label > span:nth-child(2)',
  deactexportbtn: 'div.ant-modal-content > div > div.align-center.pt-30 > button',
  //License Locator
  License: ' div:nth-child(2) > div > ul > li.ant-menu-item.ant-menu-item-selected > a'
};