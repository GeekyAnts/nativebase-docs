import UtilityPropsSpecificity from "../../pages/utilitypropsSpecificityNativeBase.pages";

describe('Utility Props Page',()=>{
    beforeEach('URL',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/utility-props-specificity');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })

        
    })

    it('Checking Elements In Page',()=>{
        UtilityPropsSpecificity.pageTitle();
        UtilityPropsSpecificity.similarProps();
        UtilityPropsSpecificity.similarprops2();
        UtilityPropsSpecificity.similarprops3();
        UtilityPropsSpecificity.previouspage();
        UtilityPropsSpecificity.nextPage();
        
        //UtilityProps.paste();
    })
})