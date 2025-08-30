class products {

    productSee() {
        return cy.get(':nth-child(1) > .link > .product-image-container > .product-image > .product-image-swipable > .product-image-swipable__viewport > .product-image-swipable__track > :nth-child(2) > [data-radix-aspect-ratio-wrapper=""] > div > .product-image-swipable__image');
        
    }

    sizeSelect() {
        return cy.get('[data-displayorder="10"]');
    }
}
export default new products();  