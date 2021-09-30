"use strict";

var faker = require('faker');

module.exports = {
  settingsmenu: 'div > div:nth-child(2) > div > ul > li:nth-child(10) > div',
  editsubmenu: 'div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1) > a',
  pricingsubmenu: 'div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(3) > a',
  licensingsubmenu: 'div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(2) > a',
  activitionlimit: '//input[@placeholder="How many sites can be active"]',
  productprice: '//input[@placeholder="Enter price"]',
  metadatasubmenu: 'div > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(4) > a',
  selectdropdown: '#datatype > div > div > div',
  selectvalue: 'ul[role="listbox"] > li:nth-of-type(1)',
  get_value: function get_value() {
    return faker.random.arrayElement(['ul[role="listbox"] > li:nth-of-type(1)', 'ul[role="listbox"] > li:nth-of-type(2)', 'ul[role="listbox"] > li:nth-of-type(3)']);
  }
};