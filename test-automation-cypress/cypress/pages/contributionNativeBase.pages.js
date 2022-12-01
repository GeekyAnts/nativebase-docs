/// <reference types="cypress" />

var ContributionNativeBase = {
    //Checking the Contribution Page Title
    pageTitle: function(){
       return cy.get('#page-title').should('have.text','Contributing to NativeBase');
    },

    //Cheking and clicking on the Code of conduct link in Code of Conduct section

    codeofConduct: function(){
        cy.get('#h3-code-of-conduct').scrollIntoView();
        cy.xpath('//span[normalize-space()="Code of conduct"]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click()
        cy.go('back');
        return this;
    },

    //checking & Clicking on the GitHub link in Open Development section

    gitHub: function(){
        cy.get('#h3-open-development').scrollIntoView();
        cy.xpath('//span[normalize-space()="GitHub"]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click()
        cy.go('back');
        return this;
    },

    //checking & Clicking on the release schedule link in Branch Organization section

    releaseSchedule: function(){
        cy.get('#h3-branch-organization').scrollIntoView();
        cy.xpath('//span[normalize-space()="release schedule"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click();
        cy.go('back');
        return this;
    },

    //checking & Clicking on the GitHub Issues link in Bugs section

    gitHubIssues: function(){
        cy.get('#h3-bugs').scrollIntoView();
        cy.xpath('//span[normalize-space()="GitHub Issues"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click()
        cy.go('back');
        return this;
    },

    //checking & Clicking on the issue helper link in Bugs Section

    issueHelper: function(){
        cy.get('#h3-bugs').scrollIntoView();
        cy.xpath('//span[normalize-space()="issue helper"]',{timeout: 10000})
        .scrollIntoView().should('be.visible').click()
        cy.go('back');
        return this;
    },

    //checking & Clicking on the template link in Bugs Section

    templates: function(){
        cy.get('#h3-bugs').scrollIntoView();
        cy.xpath('//span[normalize-space()="template."]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },

    //checking & Clicking on the FAQ link in Bugs section

    faq: function(){
        cy.get('#h3-bugs').scrollIntoView();
        cy.xpath('//span[normalize-space()="FAQ."]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },

    //checking & Clicking on the How TO Contribute to an Open Source Project on GitHub link in Your First Pull Request section

    contributetoopensourceproject:  function(){
        cy.get('#h3-your-first-pull-request').scrollIntoView();
        cy.xpath('//span[contains(text(),"How to Contribute to an Open Source Project on Git")]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.go('back');
        return this;
    },

    //Clicking on all the Sections from QUICK NAV

    quicknav: function(){
        cy.xpath('//*[contains(text(),"Quick Nav")]').scrollIntoView({easing: 'linear'})

        cy.xpath('(//*[contains(text(),"Code of Conduct")])[2]',{timeout: 10000}).click();
        cy.get('#code-of-conduct').should('be.visible');

        cy.xpath('(//*[contains(text(),"Open Development")])[2]',{timeout: 10000}).click();
        cy.get('#h3-open-development').should('be.visible');

        cy.xpath('(//*[contains(text(),"Branch Organization")])[2]',{timeout: 10000}).click();
        cy.get('#h3-branch-organization').should('be.visible');

        cy.xpath('(//*[contains(text(),"Bugs")])[2]',{timeout: 10000}).click();
        cy.get('#h3-bugs').should('be.visible');

        cy.xpath('(//*[contains(text(),"Your First Pull Request")])[2]',{timeout: 10000}).click();
        cy.get('#h3-your-first-pull-request').should('be.visible');

        cy.xpath('(//*[contains(text(),"Sending a PR")])[2]',{timeout: 10000}).click();
        cy.get('#h3-sending-a-pr').should('be.visible');

        cy.xpath('(//*[contains(text(),"Development Workflow")])[2]',{timeout: 10000}).click();
        cy.get('#h3-development-workflow').should('be.visible');

    },

    //Clicking and Navigating to Previous Page

    previouspage: function(){
        cy.xpath('(//div[@class="css-901oao r-1yvu97 r-pv2lrm r-13uqrnb r-16dba41 r-oxtfae r-dhbnww"])[1]',{timeout: 10000})
        .scrollIntoView({easing:'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Setup NativeBase Provider')

        cy.go('back');
        return this;
    },

    //Clicking and Navigating to Next Page

    nextpage : function(){
        cy.xpath('(//*[@href="/solito"])[2]',{timeout: 1000})
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Creating a Universal App with NativeBase and Solito');

        cy.go('back');

        return this;
    },

    //Change the Theme to Dark
    themechange : function(){
        cy.xpath('(//*[name()="path"][@fill="currentColor"])[3]')
        .should('be.visible').click();
    }

}
export default ContributionNativeBase;