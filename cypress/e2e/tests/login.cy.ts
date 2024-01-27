// Login page test cases
import loginPageActions from "../../pages/actions/loginPageActions";
const loginActions = new loginPageActions();

describe("login page", () => {
    it("should visit login page", () => {
        cy.visit("/login");

        loginActions.enterUsername("Admin");
        loginActions.enterPassword("admin123");
        loginActions.clickLogin();
        cy.get(".oxd-topbar-header").should("be.visible");
    });
});
