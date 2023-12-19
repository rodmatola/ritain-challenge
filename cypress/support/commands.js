Cypress.Commands.add('setUserCookie', user => { 
    cy.setCookie('session-username', user)
})
