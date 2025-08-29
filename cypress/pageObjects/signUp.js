class signUp{
    registerNavigateButton(){
        return cy.get('#registerButton');
    }

    registerEmail(){
        return cy.get('[name="email"]');
    }

    registerPassword(){
        return cy.get('[name="password"]');
    }
    registerPhone(){
        return cy.get('[name="phone"]');
    }
    notificationCheckboxEmail(){
        return cy.get('.register__optin-checkboxes > :nth-child(1)');
    }
    notificationCheckboxSms(){
        return cy.get('.register__optin-checkboxes > :nth-child(2)');
    }
    notificationCheckboxCall(){
        return cy.get('.register__optin-checkboxes > :nth-child(3)');
    }

    kvkkCheckbox(){
        return cy.get('.checkbox-p > :nth-child(1) > .modal-link');
    }

    kvkkApproveButton(){
        return cy.get('.footer__button--approve');
    }

    registerButton(){
        return cy.get('.register__button');
    }
    cookieAcceptButton(){
        return cy.get('#cookieseal-banner-accept');
    }


}
export default new signUp();