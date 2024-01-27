import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I should be at Login Page", () => {
    cy.visit("/login");
});
