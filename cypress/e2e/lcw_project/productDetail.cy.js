import { homePage } from "../../pageObjects/homePage";
import basket from "../../pageObjects/basket";
import signUp from "../../pageObjects/signUp";
import product from "../../pageObjects/products";
const basketItem= basket;
const item = product;
const sign = signUp;
const home = new homePage();
describe('Product Detail  Controller', () => {
    it('Product detail navigation controller and AddtoBasket is visible controller', () => {
        home.navigateToHomePage();
        sign.cookieAcceptButton().click();
        home.clickSearchBox("elbise");
        item.productSee().click();
        basketItem.addToBasketButton().should('be.visible');
    });
});