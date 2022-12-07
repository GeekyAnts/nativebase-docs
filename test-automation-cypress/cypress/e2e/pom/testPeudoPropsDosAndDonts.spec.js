import PseudoPropsDosAndDonts from "../../pages/pseudoPropsDosAndDonts.pages";
describe('Pseudo Props DosAnd Donts page',()=>{
beforeEach(() => {
    cy.viewport(1920,1900)

    cy.visit('https://docs.nativebase.io/pseudo-props-101')
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
});
it('Checking every element', ()=>{

    PseudoPropsDosAndDonts.pageTitle()
    PseudoPropsDosAndDonts.PreviousPage()
    PseudoPropsDosAndDonts.NextPage()
    
});
})