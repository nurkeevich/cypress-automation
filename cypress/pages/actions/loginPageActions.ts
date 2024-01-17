import * as loginPageElements from "../elements/loginPageElements.json";

class LoginPageActions {
    enterUsername(username: string) {
        cy.get(loginPageElements.usernameTextbox).type(username);
    }

    enterPassword(password: string) {
        cy.get(loginPageElements.passwordTextbox).type(password);
    }

    clickLogin() {
        cy.get(loginPageElements.loginButton).click();
    }
}

export default LoginPageActions;
