class login{

    emailorPhoneInput() {
        return cy.get('[name="emailAndPhone"]');
    }
    continueButton() {
        return cy.get('.login-form__button');
    }
    passwordInput() {
        return cy.get('[name="password"]');
    }
    loginButton() {
        return cy.get('.login-form__button');
    }

}
export default new login();
