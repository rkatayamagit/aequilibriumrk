/**
 * Licensed Materials - Property of aequilibrium
 * This is for assess expertise of QA expert.
 *  
 */

/*
author: @Rodrigo Katayama
*/

/// <reference types="cypress" />

class SwagLabsHomepage {
    home() {
        cy.get('span.title')
          .contains('Products')
          .should('exist');
    }
}


export default new SwagLabsHomepage()