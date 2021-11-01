/// <reference types ="Cypress" />
/// <reference types="cypress-xpath" />

import { loginPage } from "../Pages/loginPage";

const alerBox = "//div[@role='alert']"
const userProfile = "//span[@class='MuiButton-label-198']"
const optionLogout = "//span[contains(text(),'Logout')]"


export class validate{

    //This checks message in alert modal
    static assertAlertMsg(msg){
        cy.xpath(alerBox).should('be.visible')
            .should('contain.text',msg);
    }

    //This validate new page loaded
    static newPage(url){
        cy.url().should('contain', url);
    }

    //Login functionality
    static loginAction(){
        loginPage.acceptWebsiteCookie();

        loginPage.enterValidCredentials();

        loginPage.clickLoginBtn();
    }

    //Logout functionality
    static logoutUser(){
        cy.xpath(userProfile).click()

        cy.xpath(optionLogout).should('be.visible')
            .click()
    }

}