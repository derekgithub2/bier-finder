describe('template spec', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries/random?size=5')
      .as('getRandom')
    
      cy.visit('http://localhost:3000/')
  })

  it('should have a header with a logo and title', () => {
    
  })

  it('passes', () => {
    
  })

  it('passes', () => {
    
  })

  it('passes', () => {
    
  })

  it('passes', () => {
    
  })

})