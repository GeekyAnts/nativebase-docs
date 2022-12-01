/// <reference types="cypress" />

var ContributionNativeBase = {

    pageTitle: function(){
       return cy.get('#page-title').should('have.text','Contributing to NativeBase');
    },
    codeofConduct: function(){
        cy.xpath('//span[normalize-space()="Code of conduct"]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click()
        cy.go('back');
        return this;
    },
    gitHub: function(){
        cy.xpath('//span[normalize-space()="GitHub"]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click()
        cy.go('back');
        return this;
    },
    releaseSchedule: function(){
        cy.xpath('//span[normalize-space()="release schedule"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click();
        cy.go('back');
        return this;
    },
    gitHubIssues: function(){
        cy.xpath('//span[normalize-space()="GitHub Issues"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click()
        cy.go('back');
        return this;
    },
    issueHelper: function(){
        cy.xpath('//span[normalize-space()="issue helper"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click()
        cy.go('back');
        return this;
    },
    templates: function(){
        cy.xpath('//span[normalize-space()="template."]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },
    faq: function(){
        cy.xpath('//span[normalize-space()="FAQ."]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },
    contributetoopensourceproject:  function(){
        cy.xpath('//span[contains(text(),"How to Contribute to an Open Source Project on Git")]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },
    previouspage: function(){
        cy.xpath('(//div[@class="css-901oao r-1yvu97 r-pv2lrm r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"])[1]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },
    nextpage : function(){
        cy.xpath('(//div[@class="css-901oao r-1yvu97 r-pv2lrm r-13uqrnb r-16dba41 r-oxtfae r-dhbnww r-1ff274t"])[1]',{timeout: 1000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    }



    

}
export default ContributionNativeBase;