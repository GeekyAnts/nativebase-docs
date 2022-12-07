import CreatingUniversalAppWithNB from "../../pages/creatingUniversalApp.pages";
describe('creating Universal App',()=>{
    beforeEach(() => {
        cy.viewport(1920,1900)

        cy.visit('https://docs.nativebase.io/solito')
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
    });
    it('Checking every element', ()=>{
       
        CreatingUniversalAppWithNB.pageTitle()
        CreatingUniversalAppWithNB.githubWithoutTypecript();
        CreatingUniversalAppWithNB.githubWithTypecript();
        CreatingUniversalAppWithNB.previousButton();

CreatingUniversalAppWithNB.NextButton();



    })
})