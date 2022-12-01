import ContributionNativeBase from "../../pages/contributionNativeBase.pages";

describe('ContributionPage', () => {

    beforeEach(() => {
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/contribution')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
    });

    it('Checking Everything in page',()=>{
        ContributionNativeBase.pageTitle();
        ContributionNativeBase.codeofConduct();
        ContributionNativeBase.gitHub();
    })
})