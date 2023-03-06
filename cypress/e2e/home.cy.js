describe('Home Page', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries/random?size=5')
      .as('getRandom')
    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_state=Washington&per_page=50&page=')
      .as('searchResult')
    
      cy.visit('http://localhost:3000/')
  })

  it('should have a header with a logo and title visible', () => {
    cy.get('.header')
      .should('be.visible')

    cy.wait('@getRandom')

    cy.get('.header')
      .find('.logo')
      .should('have.attr', 'src')
      .and('eq', '/static/media/beer_icon.c22abfd9561f3d52a5f0.png')

    cy.get('.title')
      .contains('Bierfinder')
  })

  it('should display a search bar that a user can type in', () => {
    cy.get('Form')
      .should('be.visible')

    cy.get('Form')
      .get('input[type="text"]')
      .get('input[placeholder="Search..."]')
      .type('Washington')
      .should('have.value', 'Washington')
  })

  it('should have a "GO!" button', () => {
    cy.get('Form')
      .get('button')
      .should('be.visible')
  })

  it('should go to the search URL after typing a State and clicking the GO! button', () => {
    cy.get('Form')
      .get('input[type="text"]')
      .get('input[placeholder="Search..."]')
      .type('Washington')

    cy.get('Form')
      .get('button')
      .click()

    cy.wait('@searchResult')

    cy.url().should('eq', 'http://localhost:3000/search')

  })

  it('should display 5 random brewery cards', () => {
    cy.get('.random-breweries')
      .should('be.visible')
    
    cy.get('.card')
      .should('have.length', 5)
  })
})