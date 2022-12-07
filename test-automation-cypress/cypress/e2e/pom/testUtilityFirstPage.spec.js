import UtilityFirst from "../../pages/utilityfirst.pages"


describe('uUtility First Page',()=>{
    beforeEach('URL',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/utility-first')
    })
    it('Checking Elements in page',()=>{
        UtilityFirst.pageTitle();
        UtilityFirst.withReactNative();
        UtilityFirst.withNativeBase();
        UtilityFirst.utilitypropslink();
        UtilityFirst.vstacklink();
        UtilityFirst.hstacklink();
        UtilityFirst.designTokens();
        UtilityFirst.previouspage();
        UtilityFirst.nextpage();
        UtilityFirst.quickNav();
        UtilityFirst.themechange();
    })
})