before(() => {
    cy.task('getEmail', 'Test email').then((message) => {
        Cypress.env('CYPRESS_MAILBOX_ID', message.mailbox);
    });
});