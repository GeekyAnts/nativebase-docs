import DesignTokens from "../../pages/designTokens.pages";
describe('Design tokens page',()=>{
beforeEach(() => {
    cy.viewport(1920,1900)

    cy.visit('https://docs.nativebase.io/design-tokens')
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
});
it('Checking every element', ()=>{
    
    DesignTokens.pageTitle()
    DesignTokens.styledSystemLink();
});
})