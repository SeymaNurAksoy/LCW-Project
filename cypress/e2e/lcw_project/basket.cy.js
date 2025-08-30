import { homePage } from "../../pageObjects/homePage";
import basket from "../../pageObjects/basket";
import signUp from "../../pageObjects/signUp";
import product from "../../pageObjects/products";

const basketItem = basket;
const item = product;
const sign = signUp;
const home = new homePage();
describe('AddToBasket and Basket Page is visible', () => {
    it('AddToBasket Controller', () => {
        home.navigateToHomePage();
        sign.cookieAcceptButton().click();
        home.clickSearchBox("elbise");
        item.productSee().click();
        basketItem.addToBasketButton().should('be.visible');
        item.sizeSelect().click();
        basketItem.addToBasketButton().click();
        basketItem.myBasketBadge().should('contain', '1');
        basketItem.clickContinueShoppingButton();
        basketItem.navigationToBasket().click();
        basketItem.myBasket().should('be.visible');
        basketItem.myBasket().eq(1)
            .click({ force: true });
        cy.url().should('include', '/sepetim');



    });

});