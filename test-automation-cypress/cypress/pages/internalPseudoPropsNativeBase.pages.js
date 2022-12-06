
var InternalPseudoProps = {

    pageTitle: function(){
        cy.get('#page-title').should('have.text','Internal Pseudo Props');
    },

    actionsheet1: function(){
        cy.xpath('(//div[@class="css-901oao r-5sp2tw r-1o4mh9l r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"][normalize-space()="Actionsheet"])[1]')
        .scrollIntoView().click();

        cy.xpath('(//div[@dir="auto"][normalize-space()="Albums"])[1]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Delete"])[1]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Share"])[1]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Play"])[1]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Favourite"])[1]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Cancel"])[1]').click().type('{esc}')

        cy.xpath('(//form)[1]').scrollIntoView().should('be.visible').invoke('removeAttr','target').click();

        cy.go('back');

       // cy.type('{esc}');
    },
    actionsheet2: function(){
        cy.xpath('(//div[@class="css-901oao r-5sp2tw r-1o4mh9l r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"][normalize-space()="Actionsheet"])[2]')
        .scrollIntoView().click();

        cy.xpath('(//div[@dir="auto"][normalize-space()="Albums"])[2]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Delete"])[2]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Share"])[2]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Play"])[2]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Favourite"])[2]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Cancel"])[2]').click().type('{esc}')

        cy.xpath('(//form)[2]').scrollIntoView().should('be.visible').invoke('removeAttr','target').click();

        cy.go('back');


    },
    actionsheet3: function(){
        cy.xpath('(//div[@class="css-901oao r-5sp2tw r-1o4mh9l r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"][normalize-space()="Actionsheet"])[3]')
        .scrollIntoView().click();

        cy.xpath('(//div[@dir="auto"][normalize-space()="Albums"])[3]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Delete"])[3]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Share"])[3]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Play"])[3]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Favourite"])[3]').click();
        cy.xpath('(//div[@dir="auto"][normalize-space()="Cancel"])[3]').click().type('{esc}')

        cy.xpath('(//form)[3]').scrollIntoView().should('be.visible').invoke('removeAttr','target').click();

        cy.go('back');
    },
    previosPage : function(){
        cy.xpath('(//div[@class="css-901oao r-1yvu97 r-pv2lrm r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"])[1]').click();

        cy.go('back');
    },


    nextPage: function(){
        cy.xpath('(//div[normalize-space()="Responsive"])[5]').click();

        cy.get('#page-title').should('have.text','Responsive');

        cy.go('back')

    }


}

export default InternalPseudoProps