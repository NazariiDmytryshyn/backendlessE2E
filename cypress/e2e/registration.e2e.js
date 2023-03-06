describe('Registration page', () => {
    beforeEach(() => {
        // visit the registration page
        cy.visit('https://stage.backendless.com/registration');
    });

    it('register new users allowed and update status in the database', () => {
        // fill out the registration form
        cy.get('input[name="fullName"]').type("BobAutotest")
        cy.get('input[type="email"]').type('testuser@example.com');
        cy.get('input[name="pwd"]').type('testpassword');
        cy.get('input[name="confirmPassword"]').type('testpassword');

        // submit the form
        cy.get('button[class="btn btn-success"]').click();
        // cy.contains('span', 'We sent an email with a confirmation link to your email address. As soon as your email is confirmed, you will be able to login to your Backendless account.').should('exist');
        // cy.contains('a', 'Login').should('exist').click();

        // check that the user is redirected to the login page
        // cy.url().should('include', '/login');

        // const sql = 'UPDATE "main_backendless.Developer" SET "developerStatusId" = "1" WHERE ("email" = "testuser@example.com")'

        cy.task('mySql', 'UPDATE "main_backendless.Developer" SET "developerStatusId" = "1" WHERE ("email" = "testuser@example.com")')
            .then(result => {
                expect(result).to.equal(1);
            });
    });
})