import { loginPage, yourInfoPage } from "./pageElements/pageElements";

Cypress.Commands.add('login', (username, password) => {
    cy.get(loginPage.usernameField).type(username);
    cy.get(loginPage.passwordField).type(password);
    cy.get(loginPage.loginBtn).click();
});

Cypress.Commands.add('setUserCookie', user => {
    cy.setCookie('session-username', user);
});

Cypress.Commands.add('fillUserInfo', (firstName, lastName, zipCode) => {
    cy.get(yourInfoPage.firstNameField).type(firstName)
    cy.get(yourInfoPage.lastNameField).type(lastName)
    cy.get(yourInfoPage.zipCodeField).type(zipCode)
});
