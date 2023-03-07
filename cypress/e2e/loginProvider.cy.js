import * as authData from '../../authData';


describe('Login Providers', () => {
    beforeEach(() => {
        cy.visit('https://stoutdoctor-stage.backendless.app/');
        cy.clearCookies()
        cy.clearLocalStorage()
    })
    it('Login with Amazon', () => {
        // Click the Amazon login button
        cy.contains('span', 'Amazon').click();

        // Enter valid Amazon credentials
        cy.get('input[type="email"]').type(authData.emailAmazon);
        cy.get('input[type="password"]').type(authData.passAmazon);
        cy.get('input[id="signInSubmit"]').click();


        // Verify that the user is logged in
        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Auth0', () => {
        cy.contains('span', 'Auth0').click();

        cy.contains('p', 'Log in to dev-kwqllyeb to continue to BackendlessStage.').should('exist');
        cy.get('input[id="username"]').type(authData.emailAuth0);
        cy.get('input[id="password"]').type(authData.passAuth0);
        cy.contains('button', 'Continue').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Autodesk', () => {
        cy.contains('span', 'Autodesk').click();

        cy.get('input[id="userName"]').type(authData.emailAutodesk);
        cy.get('button[id="verify_user_btn"]').click();

        cy.contains('span', 'Welcome').should('exist');
        cy.contains('span', 'nazarter98@gmail.com').should('exist');
        cy.get('input[type="password"]').type(authData.passAutodesk);
        cy.get('button[aria-label="Sign in button"]').click();

        cy.contains('div', 'Authorize application').should('exist');
        cy.get('a[id="allow_btn"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Bitly', () => {
        cy.contains('span', 'Bitly').click();

        cy.contains('a', 'Sign in with your Bitly account').click();

        cy.contains('h3', 'Log in and ').should('exist');
        cy.get('input[autocomplete="username email"]').type(authData.emailBitly);
        cy.get('input[autocomplete="current-password"]').type(authData.passBitly);
        cy.get('input[value="Log in"]').click();

        cy.get('button[value="Allow"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Box', () => {
        cy.contains('span', 'Box').click();

        cy.contains('h2', 'Log in to grant access to Box').should('exist');
        cy.get('input[id="login"]').type(authData.emailBox);
        cy.get('input[id="password"]').type(authData.passBox);
        cy.get('input[name="login_submit"]').click();

        cy.get('button[id="consent_accept_button"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Discord', () => {
        cy.contains('span', 'Discord').click();


        cy.get('input[id="uid_9"]').type(authData.emailDisc);
        cy.get('input[id="uid_12"]').type(authData.passDisc);
        cy.get('button[type="submit"]').click();

        cy.get('button[class="button-ejjZWC lookFilled-1H2Jvj colorBrand-2M3O3N sizeMedium-2oH5mg grow-2T4nbg"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Dropbox', () => {
        cy.contains('span', 'Dropbox').click();

        cy.get('input[name="login_email"]').type(authData.emailDropbox);
        cy.get('input[name="login_password"]').type(authData.passDropbox);
        cy.get(':nth-child(2) > :nth-child(1) > .login-button').click()


        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with GitHub', () => {
        cy.contains('span', 'GitHub').click();

        cy.get('input[name="login"]').type(authData.emailGit)
        cy.get('input[name="password"]').type(authData.passGit)
        cy.get('input[name="commit"]').click()

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Linkedin', () => {
        cy.contains('span', 'Linkedin').click();

        cy.get('input[id="username"]').type(authData.emailLink);
        cy.get('input[id="password"]').type(authData.passLink);
        cy.get('button[data-litms-control-urn="login-submit"]').click();

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    });

    it('Login with Spotify', () => {
        cy.contains('span', 'Spotify').click();

        cy.get('input[id="login-username"]').type(authData.emailSpotify);
        cy.get('input[id="login-password"]').type(authData.passSpotify);
        cy.get('span[class="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set"]').click()

        cy.url().should('include', 'https://stoutdoctor-stage.backendless.app/?userToken');
    })
})