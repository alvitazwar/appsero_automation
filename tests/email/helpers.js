const locator = require('../email/email_locator_test.js');
const {
    I
} = inject();
module.exports = {
    range(limit, callback) {
        const data = [];

        for (let i = 1; i <= limit; i++) {
            data.push(callback());
        }

        return data;
    },
    enablefuntion() {
        I.click(locator.SwitchBtn);
        I.wait(2);
        // I.see('Deactivation auto responder enabled successfully');
        //I.valid_email();
        //I.click('Update');
        //I.wait(2);
        //I.see('Reply to email updated successfully');
    },
}