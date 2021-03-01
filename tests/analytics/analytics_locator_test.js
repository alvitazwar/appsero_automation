const {
    I
} = inject();
module.exports = {
    Analytics: 'li:nth-of-type(2) > .ant-menu-submenu-title',
    StatsMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1) > a',
    MainContentAnalytics: '#app > section > section > main',
    OptinUser: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(1) > div',
    SkippedUser: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(2) > div',
    Deactivation: 'div.overview-items-row.overview-items-style-2.ant-row > div:nth-child(3) > div',
    MySqlVersion: 'main > div > div:nth-child(6) > div:nth-child(1) > div',
    SitesMenu: 'li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(2) > a',
    UnknMsg: '//div[@class="ant-message"]//div[@class="ant-message-custom-content ant-message-error"]/span[.="Unknown error occurred."]',
    PremiumModal: 'div.ant-modal-wrap > div > div.ant-modal-content > div',
    SkipBilling: 'button.ant-btn.ant-btn-default.ant-btn-lg'

}