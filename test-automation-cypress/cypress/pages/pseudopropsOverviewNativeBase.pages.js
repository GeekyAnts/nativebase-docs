/// <reference types="cypress" />

var pseduopropsOverview = {

    pageTitle: function(){
        cy.get('#page-title').should('have.text','Pseudo props: Overview')
    },

    hover:function(){
        cy.get('#h2-hover').scrollIntoView().should('be.visible')

        cy.xpath('(//div[@class="css-1dbjc4n r-1kihuf0 r-9lim0t r-z2wwpe r-1loqt21 r-o7k8zt r-niax9q r-kkjnvc r-hg93c8 r-1otgn73"])[1]').click()
        cy.log('Hover Button CLicked');

        //opening ExpoSnack of hover
        cy.xpath('(//form)[1]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible')
        .invoke('removeAttr','target').click();
        cy.go('back');

        //Click Copy Hover Button
        cy.xpath('(//div[@role="button"])[6]')
        .scrollIntoView({easing:'linear'})
        .should('be.visible').click();
    },

    pressed: function(){
        cy.get('#h2-pressed').scrollIntoView().should('be.visible')

        cy.xpath('(//div[@class="css-1dbjc4n r-1kihuf0 r-9lim0t r-z2wwpe r-1loqt21 r-o7k8zt r-niax9q r-kkjnvc r-hg93c8 r-1otgn73"])[2]').click()
        cy.log('Pressed Button CLicked');

        //opening ExpoSnack of Pressed
        cy.xpath('(//form)[2]')
        .scrollIntoView({easing: 'linear'}).should('be.visible')
        .invoke('removeAttr','target').click();

        cy.go('back');

        //Click Copy Pressed Button
    },
    focus: function(){
        cy.get('#h2-focus').scrollIntoView().should('be.visible')

        cy.xpath('(//div[@class="css-1dbjc4n r-1kihuf0 r-9lim0t r-z2wwpe r-1loqt21 r-o7k8zt r-niax9q r-kkjnvc r-hg93c8 r-1otgn73"])[3]').click()
        cy.log('Focus Button CLicked');

        //opening ExpoSnack of Pressed
        cy.xpath('(//form)[3]')
        .scrollIntoView({easing: 'linear'}).should('be.visible')
        .invoke('removeAttr','target').click();

        cy.go('back');

    },
    platformSpecifstyling: function(){
        //
        cy.get('#h2-platform-specific-styling').scrollIntoView().should('be.visible')

        //opening ExpoSnack of Pressed
        cy.xpath('(//form)[4]')
        .scrollIntoView({easing: 'linear'}).should('be.visible')
        .invoke('removeAttr','target').click();

        cy.go('back');

    },
    previouspage: function(){
        cy.xpath('(//*[contains(text(), "Design Tokens")])[2]')
        .scrollIntoView({easing:'linear'}).should('be.visible').click();

        cy.go('back');

    },
    nextPage: function(){
        cy.xpath('(//*[@href="/pseudo-props-101"])[2]')
        .scrollIntoView({easing:'linear'}).should('be.visible').click();

        cy.go('back');
    }




}
export default pseduopropsOverview