Feature('test email sending');
Scenario('email sending', async({ I }) => {
    const mailbox = await I.haveNewMailbox().then((inbox) => {
        var inbox = { id: 't31q24', emailAddress: 'test431@mailslurp.com' }
        console.log('inbox contains', inbox);
    });

    I.openMailbox(mailbox);

    console.log('mailbox contains', mailbox);
    //I.waitForLatestEmail(10);
    I.sendEmail({
        to: ['alvi@yopmail.com'],
        subject: 'Check email is sending',
        body: 'this is not a matter of joke'
    });

})