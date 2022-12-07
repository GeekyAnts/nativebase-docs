import pseduopropsOverview  from "../../pages/pseudopropsOverviewNativeBase.pages";

describe('Utility Props Page',()=>{
    beforeEach('URL',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/pseudo-props');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
    })

    it('Checking the page',()=>{
        pseduopropsOverview.pageTitle();
        pseduopropsOverview.hover();
        pseduopropsOverview.pressed();
        pseduopropsOverview.focus();
        pseduopropsOverview.platformSpecifstyling();
        pseduopropsOverview.previouspage();
        pseduopropsOverview.nextPage();

    })
})
