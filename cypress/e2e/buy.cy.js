import { inventoryPage, yourCartPage, yourInfoPage, overviewPage, checkoutEndPage } from "../support/pageElements/pageElements";
import { faker } from '@faker-js/faker';

describe('Successfull buy', () => {
  
  
  it('buys a backpack', () => {
    cy.configureCypressAxe({
      skipFailures: true,
    })

    cy.step('Given I am on the inventory page');
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce');
    cy.percySnapshot('inventoryPage');
    cy.injectAxe()
    cy.checkA11y()

    cy.step('When I add a backpack to the cart');
    cy.get(inventoryPage.addBackpackToCartBtn).click();
    cy.get(inventoryPage.removeBackpackFromCartBtn).should('exist');
    cy.percySnapshot('addBackpackToCart');

    cy.step('And do the checkout process');
    cy.get(inventoryPage.shoppingCartBtn).click();
    cy.percySnapshot('yourCartPage');
    cy.injectAxe()
    cy.checkA11y()
    
    cy.get(yourCartPage.checkoutBtn).click();
    cy.percySnapshot('yourInfoPage');
    cy.injectAxe()
    cy.checkA11y()
    
    cy.fillUserInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());
    cy.get(yourInfoPage.continueBtn).click();
    cy.percySnapshot('overviewPage');
    cy.injectAxe()
    cy.checkA11y()

    cy.get(overviewPage.finishBtn).click()

    cy.step('Then I should see a succesfull message');
    cy.get(checkoutEndPage.checkoutComplete).should('exist')
    cy.percySnapshot('checkoutEndPage');
    cy.injectAxe()
    cy.checkA11y()
    
  });
});