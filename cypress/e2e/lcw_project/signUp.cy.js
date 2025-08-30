import { homePage } from "../../pageObjects/homePage";
import signUp from "../../pageObjects/signUp";
const home = new homePage();
const sign = signUp;
describe('signUp', () => {
  beforeEach(() => {
    home.navigateToHomePage();
  });

  it('signUp', () => {
    
    home.navigateToLoginSignUpPage();
    cy.url().should('include', '/giris');
    sign.registerNavigateButton().click();
    sign.cookieAcceptButton().click();
    sign.registerEmail().type('test@gmail.com');
    sign.registerPhone().type('5555555555');
    sign.registerPassword().type('test12345.');
    sign.notificationCheckboxEmail().click();
    sign.notificationCheckboxSms().click();
    sign.notificationCheckboxCall().click();
    sign.kvkkCheckbox().click();
    sign.kvkkApproveButton().click();
    sign.registerButton().click();
  });
});