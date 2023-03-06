describe('Search function', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries/random?size=5')
      .as('getRandom')
    cy.intercept('GET', 'https://api.openbrewerydb.org/breweries?by_state=&per_page=50&page=')
      .as('searchResult')
    
    cy.visit('http://localhost:3000/')

    cy.get('Form')
      .get('input[type="text"]')
      .get('input[placeholder="Search..."]')
      .type('Washington')

  })

  it('should go to the search URL after typing a State and clicking the GO! button', () => {
    cy.get('Form')
      .get('button')
      .click()
      .url().should('eq', 'http://localhost:3000/search')
  })

  it('should display breweries only from the state that the user seached', () => {
    cy.get('Form')
      .get('button')
      .click()
    
    cy.get('.card')
      .contains('Washington')
  })

  it('should bring the user back to the home page when clicking the beer icon', () => {
    cy.get('Form')
      .get('button')
      .click()
      .url().should('include', 'http://localhost:3000/search')

    cy.get('.logo')
      .click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should redirect the user to a google search of the brewery when clicking on a brewery card', () => {
    cy.get('Form')
      .get('button')
      .click()

    cy.get('[href="https://www.google.com/search?q=101 Brewery"] > .card').click()

    cy.url().should('include', '')
  })

  it('should direct you to the Not Found page if the url path is not valid', () => {
    cy.get('Form')
      .get('input[type="text"]')
      .get('input[placeholder="Search..."]')
      .type("stateofwashington")

    cy.get('Form')
      .get('button')
      .click()
    
    cy.url().should('eq', 'http://localhost:3000/notfound')

  })
})