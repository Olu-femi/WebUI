import {When, Before} from "cypress-cucumber-preprocessor/steps"
import { loginPage } from "../Pages/loginPage";


Before({tags: "@login"}, function () {
    // This hook will be executed before scenarios tagged with @login
    cy.visit('https://tripsportal.test.vggdev.com/login');

    loginPage.acceptWebsiteCookie();
});

When(/^I input valid login credentials$/, () => {
	loginPage.enterValidCredentials();
});

When(/^I input invalid login credentials$/, () => {
	loginPage.enterInvalidCredentials();
});

When(/^Click on the login button$/, () => {
	loginPage.clickLoginBtn();
});

