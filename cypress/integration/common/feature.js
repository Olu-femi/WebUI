import { Then, Given } from "cypress-cucumber-preprocessor/steps"
import { validate } from "../common/validations";
import { element } from "./elements";


Then(/^I should be redirected to "([^"]*)" page$/, (args1) => {
	validate.newPage(args1);
});

Then(/^I should be presented with error message "([^"]*)" on an alert modal$/, (args1) => {
	validate.assertAlertMsg(args1);
});

Given(/^User has logged in successfully$/, () => {
	element.openNavBar();
});