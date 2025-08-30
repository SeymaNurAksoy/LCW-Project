import login from "../../pageObjects/login";
const log = login;
import { homePage } from "../../pageObjects/homePage";
const home = new homePage();

describe('Login Controller', () => {

    it('Login Page Url Controller', () => {
        home.navigateToHomePage();
        home.navigateToLoginSignUpPage();
        cy.url().should('include', '/giris');
        log.emailorPhoneInput().should('be.visible');
        log.emailorPhoneInput().type('5555555555');
        log.continueButton().should('be.visible');
        log.continueButton().click();
        log.passwordInput().should('be.visible');
        log.passwordInput().type('test12345.');
        log.loginButton().should('be.visible');
    });
});
