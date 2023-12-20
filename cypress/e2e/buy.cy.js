import { inventoryPage, yourCartPage, yourInfoPage, overviewPage, checkoutEndPage } from "../support/pageElements/pageElements";
import { faker } from '@faker-js/faker';

describe('Successfull buy', () => {
  it('buys a backpack', () => {

    cy.step('Given I am on the inventory page');
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce');

    cy.step('When I add a backpack to the cart');
    cy.get(inventoryPage.addBackpackToCart).click();

    cy.step('And do the checkout process');
    cy.get(inventoryPage.shoppingCartBtn).click();
    cy.get(yourCartPage.checkoutBtn).click();
    cy.fillUserInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());
    cy.get(yourInfoPage.continueBtn).click();
    cy.get(overviewPage.finishBtn).click()

    cy.step('Then I should see a succesfull message');
    cy.get(checkoutEndPage.checkoutComplete).should('exist')
    
  });
});