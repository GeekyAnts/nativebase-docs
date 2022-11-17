    /* check the documentation if getting errors: https://bit.ly/3LKWTXR */
    describe('test elements assertions', () => {

        beforeEach(() => {
            cy.visit('https://docs.nativebase.io')
        })

        it('Getting Started Page', () => {

         //VALIDATE NATIVEBASE LOGO IS VISIBLE OR NOT
        cy.xpath('(//a)[1]')
        .should('include.text', 'NativeBase');


        //VALIDATE TITLE GETTING STARTED IS VISIBLE OR NOT
        cy.get('#page-title')
        .should('include.text', 'Getting Started');

        //VALIDATE FIRST BOX - INSTALLATION GUIDE IS VISIBLE OR NOT 
        cy.xpath("//*[contains(text(), 'Installation Guide')]")
        .should('include.text', 'Installation Guide');

        //VALIDATE SECOND BOX - PLAYGROUND IS VISIBLE OR NOT 
        cy.xpath('//*[contains(text(),"Playground")]')
        .should('include.text', 'Playground');

        //VALIDATE THIRD BOX - THEMING IS VISIBLE OR NOT 
        cy.xpath('//*[@href="/default-theme"]/div[2]')
        .should('include.text', 'Create your own Design System');

        //VALIDATE FOURTH BOX - RECIPES IS VISIBLE OR NOT 
        cy.xpath('(//*[contains(text(),"Recipes")])[2]')
        .should('include.text', 'Recipes');
        
        })
    });