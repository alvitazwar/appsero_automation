Feature('My First Test');

Scenario('test something', ({ I }) => {
  I.amOnPage('https://opensource-demo.orangehrmlive.com/');
  I.fillField('txtUsername', 'Admin');
  I.fillField('txtPassword','admin123');
  I.click('Submit');
  I.see('Dashboard');
});
