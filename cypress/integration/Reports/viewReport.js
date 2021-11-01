import { After, Before, When } from "cypress-cucumber-preprocessor/steps"
import { element } from "../common/elements";
import { validate } from "../common/validations";
import { loginPage } from "../Pages/loginPage";


Before(function () {
    // This hook will be executed before scenarios tagged with @login
    cy.visit('https://tripsportal.test.vggdev.com/login');

    validate.loginAction();
    
    validate.newPage('/agents')
});

When(/^Navigates to Trips report$/, () => {
	element.gotoTripsReport();
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
