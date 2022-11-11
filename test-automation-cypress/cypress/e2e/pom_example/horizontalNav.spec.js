    describe('test navigation header elements assertions', () => {

    beforeEach(() => {
    cy.visit('https://docs.nativebase.io')
    })

    it('NAV_HORIZONTAL-HEADER', () => {

    //VALIDATE NATIVEBASE LOGO IS VISIBLE OR NOT
    cy.xpath('(//*[normalize-space(.)="NativeBase"])[2]').should('include.text', 'NativeBase');

    //VALIDATE NATIVEBASE VERSION IS VISIBLE OR NOT
    cy.get('#react-aria-3>div>div').should('include.text', '3.4.x');

    //VALIDATE DROPDOWN NEXT TO VERSION IS VISIBLE OR NOT
    cy.xpath('(//*[@role="img"])[1]').should('include.text', '');

    //VALIDATE ANNOUNCEMENT IS VISIBLE OR NOT
    cy.get('a>.r-cygvgh').should('include.text', 'Announcing NativeBase Startup+ bundle 🎉');

    //VALIDATE SEARCH BOX IS VISIBLE OR NOT
    cy.xpath('(//*[contains(text(),"Search")])[2]').should('include.text', 'Search');

        //VALIDATE FIGMA IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[2]").should('include.text', '');

    //VALIDATE GITHUB IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[3]").should('include.text', '');

    //VALIDATE DISCORD IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[4]").should('include.text', '');

    //VALIDATE DARK/LIGHT MODE BUTTON IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[5]").should('include.text', '');

    //VALIDATE HIREUS IS VISIBLE OR NOT
    cy.xpath("(//a[@role='link'])[6]").should('include.text', 'Hire us');
    
    })
})