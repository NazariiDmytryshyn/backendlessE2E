// WORK ONLY IN LOCALHOST

describe('test connection db', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it.skip('register new users allowed and update status in the database', () => {
        cy.contains('a', 'Create Account').click();

        cy.get('input[name="fullName"]').type("BobAutotest");
        cy.get('input[type="email"]').type('testuser@example.com');
        cy.get('input[name="pwd"]').type('testpassword');
        cy.get('input[name="confirmPassword"]').type('testpassword');

        // submit the form
        cy.intercept('POST', 'http://localhost:3000/console/devreg', (req) => {
            console.log(req);
        }).as('registerRequest');

        cy.get('button[class="btn btn-success"]').click();

        cy.wait('@registerRequest').then((interception) => {
            // перевіряємо, що запит був відправлений
            expect(interception.request).to.exist;
        });

        cy.visit('http://localhost:3000');
        cy.get('input[type=\'email\']').should('exist').type('testuser@example.com');
        cy.get('input[type=\'password\']').type('testpassword').should('exist');
        cy.get('button[type=\'submit\']').should('exist').click();
    });

    it('Change status in DB and login', () => {
        // cy.task('queryDb', 'UPDATE `main_backendless`.`Developer` SET `developerStatusId` = "1" WHERE (`email` = "testuser@example.com")')
        // User can login
        cy.get('input[type=\'email\']').should('exist').type('testuser@example.com');
        cy.get('input[type=\'password\']').type('testpassword').should('exist');
        cy.get('button[type=\'submit\']').should('exist').click();
        // Initial questionare
        cy.get('[id^="react-select"][id$="listbox"]').within(() => {
            cy.contains('No prior experience')
        });

    })
});
