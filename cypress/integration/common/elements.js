/// <reference types ="Cypress" />
/// <reference types="cypress-xpath" />

//using class as selectors
const hamburgerIcon = ".MuiIconButton-label-286 > .material-icons"

//using xpath as selector
const reportsTab = "//span[contains(text(),'Reports')]"
const tripsReportMenu = "//span[contains(text(),'Trips Report')]"
const agentReportMenu = "//span[contains(text(),'Agents Report')]"
const merchantReportMenu = "//span[contains(text(),'Merchants Report')]"
const requestLogMenu = "//span[contains(text(),'Request Logs Tracking')]"
const monitoringConsoleTab = "//span[contains(text(),'Monitoring Console')]"



export class element{

    //This is used to click the navbar icon
    static openNavBar(){
        cy.get(hamburgerIcon).should('be.visible')
            .click();
    }

    //This navigates user to trips report
    static gotoTripsReport(){
        cy.xpath(reportsTab).should('be.visible').click()
            .xpath(tripsReportMenu).click();
    }

    //This navigates user to agent report
    static gotoAgentsReport(){
        cy.xpath(reportsTab).should('be.visible').click()
            .xpath(agentReportMenu).click();
    }

    //This navigates user to merchant report
    static gotoMerchantsReport(){
        cy.xpath(reportsTab).should('be.visible').click()
            .xpath(merchantReportMenu).click();
    }

    //This navigates user to Request Log
    static gotoRequestLog(){
        cy.xpath(reportsTab).should('be.visible').click()
            .xpath(requestLogMenu).click();
    }

    //This navigates user to Monitoring Console
    static gotoMonitoringConsole(){
        cy.xpath(monitoringConsoleTab).should('be.visible')
            .click();
    }

    
}