import { mount } from 'cypress/react18'


Cypress.Commands.add('mount', (component, options) => {

describe('KitchenSync.cy.js', () => {
  it('playground', () => {
    // cy.mount()
      // Wrap any parent components needed
  // ie: return mount(<MyProvider>{component}</MyProvider>, options)
  return mount(component, options)
})
  })
})