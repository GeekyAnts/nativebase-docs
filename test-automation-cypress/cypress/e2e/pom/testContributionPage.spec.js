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
        ContributionNativeBase.releaseSchedule();
        ContributionNativeBase.gitHubIssues();
        ContributionNativeBase.issueHelper();
        ContributionNativeBase.templates();
        ContributionNativeBase.faq();
        ContributionNativeBase.contributetoopensourceproject();
        ContributionNativeBase.quicknav();
        ContributionNativeBase.previouspage();
        ContributionNativeBase.nextpage();
        ContributionNativeBase.themechange();

        })
})