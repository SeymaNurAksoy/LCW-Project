import { homePage } from "../../pageObjects/homePage";
import signUp from "../../pageObjects/signUp";
const sign = signUp;
const home = new homePage();
describe('HomePage Controller', () => {
    it('homePageUrl Controller', () => {
        home.navigateToHomePage();
        cy.url().should('include', 'lcw.com');
    });

    it('Title Controller', () => {
        home.navigateToHomePage();
        cy.title().should('eq', 'LCW.com: Trendler ve Yenilikçi Online Alışveriş Deneyimi Burada! | LCW')
    });

    it.only('Search Controller', () => {

        home.navigateToHomePage();
        sign.cookieAcceptButton().click();
        home.clickSearchBox("pantolon");
        cy.get(':nth-child(1) > .link > .product-card-info > .product-card-info__body > .product-card-info__content > .product-description')
            .invoke('text')
            .should('match', /pantolon/i);

    });
});

