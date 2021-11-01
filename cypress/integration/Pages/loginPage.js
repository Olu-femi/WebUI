/// <reference types ="Cypress" />
/// <reference types="cypress-xpath" />

const cookieConsent = "//div[@class='CookieConsent']"
const acceptCookieButton = "//button[@id='rcc-confirm-button']"
const usernameTextField = "//input[@name='Username']"
const passwordTextField = "//input[@name='Password']"
const loginButton = "//button[@aria-label='LOG IN']"

export class loginPage{

    static acceptWebsiteCookie(){
        cy.xpath(cookieConsent).should('be.visible');

        cy.xpath(acceptCookieButton).click();
    }

    static enterValidCredentials(){
        cy.fixture('credentials').as('users');

        cy.get('@users').then(cred => {
            cy.xpath(usernameTextField).first().type(cred.vgg_admin1, {log:false});

            cy.xpath(passwordTextField).last().type(cred.password, {log:false});
        })
    }

    static enterValidCredentials_2(){
        cy.fixture('credentials').as('users');

        cy.get('@users').then(cred => {
            cy.xpath(usernameTextField).first().type(cred.vgg_admin2, {log:false});

            cy.xpath(passwordTextField).last().type(cred.password, {log:false});
        })
    }


    static enterInvalidCredentials(){
        cy.fixture('credentials').as('users');

        cy.get('@users').then(cred => {
            cy.xpath(usernameTextField).first().type(cred.vgg_admin1, {log:false});

            cy.xpath(passwordTextField).last().type(cred.invalid_password, {log:false});
        })
    }

    static clickLoginBtn(){
        cy.xpath(loginButton).click();

        cy.intercept('/api/Account/Login').as('login');

        cy.wait('@login', { timeout: 500000 }).its('response.statusCode').should('be.oneOf',[200,400]);

    }
}