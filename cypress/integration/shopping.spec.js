describe('Visit Shopping Cart App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Displays list of products', () => {
    cy.get('.product')
      .should('have.length', 8)
  })

  it('Add a product to the shopping cart', () => {
    cy.get('.product')
      .first()
      .find('button')
      .click()
      .get('.card')
      .should('have.length', 1)
  })

  it('Remove a product from the shopping cart', () => {
    cy.get('.product')
      .first()
      .find('button')
      .click()
      .get('.card')
      .first()
      .find('button')
      .click()
      .get('.empty-cart')
      .find('span')
      .should('have.text', 'Empty Cart')
  })

  it('Checkout', () => {
    cy.get('.product')
      .first()
      .find('button')
      .click()
      .get('.card')
      .should('have.length', 1)
      .get('.checkout')
      .find('button')
      .click()
      .get('.payment')
      .find('a')
      .should('have.length', 2)
  })
})