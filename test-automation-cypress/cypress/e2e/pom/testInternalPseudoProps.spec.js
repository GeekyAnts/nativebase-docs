import InternalPseudoProps from "../../pages/internalPseudoPropsNativeBase.pages";

describe('Utility Props Page',()=>{
    beforeEach('URL',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://docs.nativebase.io/internal-pseudo-props');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
    })
    it('Checking',()=>{
        InternalPseudoProps.pageTitle();
        InternalPseudoProps.actionsheet1();
        InternalPseudoProps.actionsheet2();
        InternalPseudoProps.actionsheet3();
        InternalPseudoProps.previosPage();
        InternalPseudoProps.nextPage();
    })

})