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
    SitesTable: 'div.ant-table.appsero-table-default.sites-table.appsero-responsive-table',
    ExportBtn: 'div.ant-row-flex.ant-row-flex-middle.ant-row-flex-space-between.table-filters > div:nth-child(2) > button',
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


}