import { Before, When } from "cypress-cucumber-preprocessor/steps"
import { element } from "../common/elements";
import { validate } from "../common/validations";
import { ReportsPage } from "../Pages/ReportsPage";


Before(function () {
    // This hook will be executed before scenarios tagged with @login
    let url = Cypress.config().baseUrl;
    cy.visit(url);

    validate.loginAction();
    
    validate.newPage('/agents')
});

When(/^Navigates to Trips report$/, () => {
	element.gotoTripsReport();
	//ReportsPage.makeSearchCall();
});

When(/^Navigates to Agent report$/, () => {
	element.gotoAgentsReport();
});

When(/^Navigates to Merchant report$/, () => {
	element.gotoMerchantsReport();
});

When(/^Navigates to request logs$/, () => {
	element.gotoRequestLog();
});

When(/^Navigates to monitoring console$/, () => {
	element.gotoMonitoringConsole();
});
