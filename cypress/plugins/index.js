const Mailosaur = require('mailosaur');

module.exports = (on, config) => {
    const mailosaurApiKey = Cypress.env('00aFft9D0JHFaMhJ');
    const mailosaurServerId = Cypress.env('oz4gw8rb');

    on('task', {
        async getEmail(messageSubject) {
            const client = new Mailosaur(mailosaurApiKey);
            const messages = await client.messages.list(mailosaurServerId);
            const message = messages.items.find((item) => item.subject === messageSubject);
            return message;
        },
    });
};