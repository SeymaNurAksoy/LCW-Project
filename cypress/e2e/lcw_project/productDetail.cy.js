import { homePage } from "../../pageObjects/homePage";
import signUp from "../../pageObjects/signUp";
import product from "../../pageObjects/products";

const item = product;
const sign = signUp;
const home = new homePage();
describe('Product Detail  Controller', () => {
    it('Product detail navigation controller and AddtoBasket is visible controller', () => {
        home.navigateToHomePage();
        sign.cookieAcceptButton().click();
        home.clickSearchBox("elbise");
        item.productSee().click();
        item.addToBasketButton().should('be.visible');
    });
});