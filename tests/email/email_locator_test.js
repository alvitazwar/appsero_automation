const {
    I
} = inject();
module.exports = {
    EmailMenu: 'div > div:nth-child(2) > div > ul > li:nth-child(9) > div',
    //Email Digest Locators
    EmailDigest: 'ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(1)',
    svgicon: 'div.plugins-list.ant-row > div > div > div > div:nth-child(3) > a',
    Editbtn: '//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[1]/span[.=" Edit "]',
    SendNowbtn: 'li:nth-of-type(3) > span',
    PauseBtn: '//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[2]/span[.=" Pause "]',
    ActiveBtn: '//div[@class="ant-dropdown ant-dropdown-placement-bottomLeft"]/ul[@role="menu"]/li[2]/span[.=" Active "]',
    Frequency: '//*[@id="frequency"]/div/div',
    FrequencyWeekly: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[2]',
    FrequencyMonthly: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[3]',
    SendOn: '//*[@id="send_on"]/div/div',
    SendOnFriday: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[5]',
    SendOn7th: '//div[@class="ant-select-dropdown-content"]/ul[@role="listbox"]/li[7]',
    //Auto Responder Locators
    AutoResponder: 'ul > li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-open > ul > li:nth-child(3)',
    SwitchBtn: '//div[@id="app"]//section[@class="ant-layout content-main"]//div[@class="ant-row-flex ant-row-flex-center"]//button[@role="switch"]',


}