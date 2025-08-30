class basket {

    addToBasketButton() {
        return cy.get('.product-detail__add-to-cart > .lcw-button');
    }

    myBasketBadge() {
        return cy.get('.cart-badge');
    }

    navigationToBasket() {

        return cy.get('.dropdown-label.mobile-only');
    }

    clickContinueShoppingButton() {
        cy.get('div.add-to-cart-preview__actions')
            .eq(1) // 2. action div
            .find('button.add-to-cart-preview__button')
            .first() // ilk buton
            .click();
        return this;
    }
    myBasket() {
        return cy.get('.cart-drawer__footer .cart-drawer__actions.lcw-button--primary');
    }

}
export default new basket();