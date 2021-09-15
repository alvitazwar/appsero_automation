"use strict";

Feature('test email sending');
Scenario('email sending', function _callee(_ref) {
  var I, mailbox;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          _context.next = 3;
          return regeneratorRuntime.awrap(I.haveNewMailbox().then(function (inbox) {
            var inbox = {
              id: 't31q24',
              emailAddress: 'test431@mailslurp.com'
            };
            console.log('inbox contains', inbox);
          }));

        case 3:
          mailbox = _context.sent;
          I.openMailbox(mailbox);
          console.log('mailbox contains', mailbox); //I.waitForLatestEmail(10);

          I.sendEmail({
            to: ['alvi@yopmail.com'],
            subject: 'Check email is sending',
            body: 'this is not a matter of joke'
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});