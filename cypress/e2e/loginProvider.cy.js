describe('Login Providers', () => {
    beforeEach(() => {
        cy.visit('https://stoutdoctor-stage.backendless.app/');
        cy.clearCookies()
    })
    it('Login with Amazon', () => {
        // Click the Amazon login button
        cy.contains('span', 'Amazon').click();

        // Enter valid Amazon credentials
        cy.get('input[type="email"]').type('nazarter98@gmail.com');
        cy.get('input[type="password"]').type('Yfpsr_0978981183');
        cy.get('input[id="signInSubmit"]').click();


        // Verify that the user is logged in
        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Auth0', () => {
        cy.contains('span', 'Auth0').click();

        cy.contains('p', 'Log in to dev-kwqllyeb to continue to BackendlessStage.').should('exist');
        cy.get('input[id="username"]').type('naz.dmytryshyn@gmail.com');
        cy.get('input[id="password"]').type('Yfpsr_789456123');
        cy.contains('button', 'Continue').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Autdesk', () => {
        cy.contains('span', 'Autodesk').click();

        cy.get('input[id="userName"]').type('nazarter98@gmail.com');
        cy.get('button[id="verify_user_btn"]').click();

        cy.contains('span', 'Welcome').should('exist');
        cy.contains('span', 'nazarter98@gmail.com').should('exist');
        cy.get('input[type="password"]').type('Yfpsr_789456123');
        cy.get('button[aria-label="Sign in button"]').click();

        cy.contains('div', 'Authorize application').should('exist');
        cy.get('a[id="allow_btn"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Bitly', () => {
        cy.contains('span', 'Bitly').click();

        cy.contains('a', 'Sign in with your Bitly account').click();

        cy.contains('h3', 'Log in and ').should('exist');
        cy.get('input[autocomplete="username email"]').type('naz.dmytryshyn@gmail.com');
        cy.get('input[autocomplete="current-password"]').type('Yfpsr_789456123');
        cy.get('input[value="Log in"]').click();

        cy.get('button[value="Allow"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Box', () => {
        cy.contains('span', 'Box').click();

        cy.contains('h2', 'Log in to grant access to Box').should('exist');
        cy.get('input[id="login"]').type('naz.dmytryshyn@gmail.com');
        cy.get('input[id="password"]').type('Yfpsr_789456123');
        cy.get('input[name="login_submit"]').click();

        cy.get('button[id="consent_accept_button"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Discord', () => {
        cy.contains('span', 'Discord').click();


        cy.get('input[id="uid_9"]').type('yfpsr9@ukr.net');
        cy.get('input[id="uid_12"]').type('Yfpsr_789456123');
        cy.get('button[type="submit"]').click();

        cy.get('button[class="button-ejjZWC lookFilled-1H2Jvj colorBrand-2M3O3N sizeMedium-2oH5mg grow-2T4nbg"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it.skip('Login with Dropbox', () => {
        cy.contains('span', 'Dropbox').click();

        cy.get('input[name="login_email"]').type('naz.dmytryshyn@gmail.com');
        cy.get('input[name="login_password"]').type('Yfpsr_789456123');
        cy.get('.login-form-container__apple-div > .dwg-sso-button > .dwg-sso-button--text-container').click();
        cy.get('input[id="account_name_text_field"]').type('yfpsr9@ukr.net');
        cy.get('.shared-icon').click()

        // cy.get('button[id="warning-button-continue"]').click();
        // cy.contains('span', 'Разрешить').click();

        // cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    })
})