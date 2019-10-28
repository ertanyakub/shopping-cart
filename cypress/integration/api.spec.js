describe('Shopping Cart Api Request', () => {
  it('displays products from API', () => {
    cy.request('https://api.npoint.io/226f193cd969035500cc')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.products).to.have.length(8)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
})