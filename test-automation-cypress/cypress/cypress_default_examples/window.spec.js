/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://docs.nativebase.io')
  })

  it('cy.window() - get the global window object', () => {
    // https://docs.nativebase.io
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://docs.nativebase.io
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://docs.nativebase.io
    cy.title().should('include', 'Kitchen Sink')
  })
})
