/**
 * Licensed Materials - Property of aequilibrium
 * This is for assess expertise of QA expert.
 *  
 */

/*
author: @Rodrigo Katayama
*/

/// <reference types="cypress" />
class SwagLabsSignin {

    go() {
        cy.visit('/')
        cy.get('#user-name')
            .should('exist')
        cy.get('#password')
            .should('exist')
        cy.get('#login_button_container')
            .should('exist')
    }

    signin(userType) {
        cy.fixture('credentials')
            .as('user')
            .then(user => {
                const { username, password } = user[userType];
                //Provide username
                cy.get('#user-name')
                    .should('exist')
                    .type(username)
                //Provide password
                cy.get('#password')
                    .should('exist')
                    .type(password, { log: false });
            });

    }

    submit() {
        cy.get('#login-button')
            .should('exist')
            .click();
    }

    signinUserblank(userType) {
        cy.fixture('credentials')
            .as('user')
            .then(user => {
                const { password } = user[userType];
                //Provide password
                cy.get('#password')
                    .should('exist')
                    .type(password, { log: false });
            });

    }

    signinPasswordblank(userType) {
        cy.fixture('credentials')
            .as('user')
            .then(user => {
                const { username} = user[userType];
                //Provide username
                cy.get('#user-name')
                    .should('exist')
                    .type(username)
            });

    }

    alertShouldHaveText(expectedText) {
        cy.get('.error-message-container h3')
            .should('have.text', expectedText)
            .should('be.visible')
    };

}

export default new SwagLabsSignin()