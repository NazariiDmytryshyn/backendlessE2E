/// <reference types='cypress' />

describe('UI/Func Login/Recovery/Restore page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login page UI', () => {
        cy.visit('/')

        cy.get('div').should('have.class', 'product-logo product-logo-block');
        cy.contains('span', 'Sign in').should('exist');
        cy.contains('button', 'TWITTER').should('exist');
        cy.contains('button', 'GITHUB').should('exist');
        cy.contains('button', 'GOOGLE').should('exist');
        cy.contains('span', 'or with your Backendless account').should('exist');

        cy.contains('label', 'Email Address').should('exist');
        cy.get('input[type=\'email\']').should('exist').type('nazarter98@gmail.com');

        cy.contains('label', 'Password').should('exist');
        cy.get('input[type=\'password\']').type('password123123123_12').should('exist');

        cy.get('button[type=\'submit\']').should('exist')

        cy.contains('a', 'Forgot password?').should('exist');
        cy.contains('button', 'Resend Confirmation Email').should('exist');
        cy.contains('a', 'Create Account').should('exist');
    });

    it('Login in accont negative', () => {
        cy.url().should('include', '/login');

        cy.get('input[type=\'email\']').should('exist').type('ivalidEmail@gmail.com');
        cy.get('input[type=\'password\']').type('invalidPassword').should('exist');
        cy.get('button[type=\'submit\']').should('exist').click();

        cy.contains('Invalid developer\'s login or password').should('exist');

        cy.get('input[type=\'password\']').clear()
        cy.get('button[type=\'submit\']').should('exist').click();

        cy.contains('Invalid developer\'s login or password').should('exist');

        cy.get('input[type=\'email\']').should('exist').clear();

        cy.contains('Invalid developer\'s login or password').should('exist');
    });

    it('Login possitive', () => {
        cy.url().should('include', '/login');

        cy.get('input[type=\'email\']').should('exist').type('bob@bob.com');
        cy.get('input[type=\'password\']').type('111111').should('exist');
        cy.get('button[type=\'submit\']').should('exist').click();

        cy.wait(10000);

        cy.contains('button', 'Continue').should('exist').click();
        cy.contains('span', 'Do not show this message').should('exist').click();
        cy.contains('button', 'Close').should('exist').click();
        cy.contains('span', 'Manage').should('exist');

        cy.url().should('include', '/manage');
    });

    it('Redirect Sign Up page', () => {
        cy.contains('a', 'Create Account').should('exist').click();

        cy.url().should('include', '/registration');

        cy.contains('div', 'Backendless Account Registration').should('exist');
        cy.contains('label', 'Full Name').should('exist');
        cy.get('input[name=\'fullName\']').type('Nazar Dmytryshyn').should('exist');

        cy.contains('label', 'Email').should('exist');
        cy.get('input[name=\'email\']').type('newemail@email.com').should('exist');

        cy.contains('label', 'Password').should('exist');
        cy.get('input[name=\'pwd\']').type('111111').should('exist');

        cy.contains('label', 'Confirm Password').should('exist');
        cy.get('input[name=\'confirmPassword\']').type('111111').should('exist');

        cy.contains('a', 'Login').should('exist').click();
        cy.contains('span', 'Sign in').should('exist');
    });

    it('Redirect Recovery Password page', () => {
        cy.contains('a', 'Forgot password?').should('exist').click();

        cy.url().should('include', '/restore-password');

        cy.contains('span', 'Request Password Change').should('exist');
        cy.contains('label', 'Email Address').should('exist');
        cy.get('input[type=\'email\']').type('newemail@email.com').should('exist');

        cy.contains('button', 'Send email').should('exist').click();

        cy.contains('a', 'Back to Login').should('exist').click();

        cy.contains('span', 'Sign in').should('exist');
    });

    it('Recovery password negative', () => {
        cy.contains('a', 'Forgot password?').should('exist').click();

        cy.url().should('include', '/restore-password');

        cy.get('input[type=\'email\']').type('invalidEmail@gmail.com').should('exist');
        cy.contains('button', 'Send email').should('exist').click();

        cy.contains('Unable to find an account with the email address').should('exist');
    });

    it('Recovery password positive', () => {
        cy.contains('a', 'Forgot password?').click();

        cy.url().should('include', '/restore-password');

        cy.get('input[type=\'email\']').type('bob@bob.com');
        cy.contains('button', 'Send email').should('exist').click();

        cy.contains('p', 'We sent an email with a link to change password to your email address.').should('exist');
        cy.contains('a', 'Login').should('exist').click();
    })

    it('Resend Confirmation Email success', () => {
        cy.get('input[type=\'email\']').type('bob@bob.com')

        cy.contains('button', 'Resend Confirmation Email').should('exist').click();

        cy.contains('div', 'Registration confirmation was send to specified email').should('exist');
    });
});