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
    }
    

}
export default ContributionNativeBase;