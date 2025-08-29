export class homePage {

    navigateToHomePage() {
        cy.visit('https://www.lcw.com', {
            onBeforeLoad(win) {
                win.ADRUM = {
                    command: () => { } // boş fonksiyon, hata atmaz
                };
            }
        });
        return this;
    }

    navigateToLoginSignUpPage() {
        cy.get('.header-section > :nth-child(1)').click();
        return this;
    }
}