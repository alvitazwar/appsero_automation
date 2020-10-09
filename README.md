# appsero_automation
This project contains the automation codes for appesero acceptance test.



git clone https://github.com/user/repo.git




Run npm install codeceptjs puppeteer --save


Make sure Puppeteer helper is enabled in codecept.conf.js config:
{ // ..
  helpers: {
    Puppeteer: {
      url: "http://localhost",
      show: true
    }
  }
  // ..
}
