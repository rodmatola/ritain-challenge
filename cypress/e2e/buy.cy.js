describe('Successfull buy', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('buys a backpack', () => {
    
    cy.step('Given I am on the inventory page')
    cy.setUserCookie('standard_user')
    // cy.visit('/')
    cy.visit('inventory.html')


    cy.step('When I add a backpack to the cart')


    cy.step('And do the checkout process')


    cy.step('Then I should see a succesfull message')
  })
})