import UtilityProps from "../../pages/utilitypropsNativeBase.pages";

describe('Utility Props Page',()=>{
    beforeEach('URL',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/utility-props-specificity');

        
    })

    it('Checking Elements In Page',()=>{
        UtilityProps.pageTitle();
        UtilityProps.similarProps();
        UtilityProps.similarprops2();
        UtilityProps.similarprops3();
        UtilityProps.previouspage();
        UtilityProps.nextPage();
        
        //UtilityProps.paste();
    })
})