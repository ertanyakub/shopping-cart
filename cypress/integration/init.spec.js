describe('Visit Shopping Cart App', () => {
  it('Yes, it is working', () => {
    expect(true).to.equal(true)
  })

  it('Visits the app', () => {
    cy.visit('http://localhost:3000')
  })
})