<reference types="cypress" />


const reactnativefile = '/Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pages/files/utilitywithreactnative.txt';


var UtilityFirst = {

    //Validating hte page -title

    pageTitle: function(){
        cy.get('#page-title').should('have.text','Utility First');
    },

    //With React Native Section
    withReactNative(){
        //Clicking the Expo link in With React Native section
        cy.get('#h2-with-react-native').scrollIntoView({easing: 'linear'})
        cy.xpath('(//form)[1]',{timeout: 10000})
        .scrollIntoView({easing: 'linear'}).should('be.visible')
        .invoke('removeAttr','target').click();
        cy.go('back');

        //Clicking the Copy option in With React Native Section
        cy.xpath('(//div[@role="button"])[6]')
        .scrollIntoView({easing:'linear'})
        .should('be.visible').click();
        
        //Pasting it to file from clipboard
        this.paste

        return this;
    },
    
    //With NativeBase section
    withNativeBase:function(){
        cy.get('#h2-with-nativebase').scrollIntoView({easing:'linear'});

        //Clicking on the Expo link Present in With NativeBase Section
        cy.xpath('(//form)[2]',{timeout:10000})
        .scrollIntoView({easing:'linear'})
        .invoke('removeAttr','target')
        .should('be.visible').click();

        cy.go('back');

        //Copying the code in With NativeBase section
        cy.xpath('(//div[@role="button"])[8]')
        .scrollIntoView({easing:'linear'})
        .should('be.visible').click();
        
        //Pasting the code from clipboard
        this.paste

        return this;

    },
    //Clicking on the Utility Props in Iwth NativeBase section
    utilitypropslink: function(){
        cy.xpath('//span[normalize-space()="utility props"]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Utility Props');

        cy.go('back');
        return this;

    },

    //Clicking on the VStack in Iwth NativeBase section

    vstacklink: function(){
        cy.xpath('(//span[normalize-space()="VStack"])[3]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','VStack / Column')

        cy.go('back');
        return this;
    },

    //Clicking on the HStack in Iwth NativeBase section
    hstacklink: function(){
        cy.xpath('(//span[normalize-space()="HStack"])[3]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','HStack / Row')

        cy.go('back');
        return this;
    },
    //Clicking on the Design Tokens Link 
    designTokens: function(){
        cy.xpath('(//div[normalize-space()="Design tokens"])[2]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Design tokens')

        cy.go('back');
        return this;
    },
    paste:function(){
        cy.writeFile(reactnativefile, cy.type('{cmd+v}'))
    },

    //Click to Navigate to previous page
    previouspage: function(){
        cy.xpath('(//div[normalize-space()="Creating a Universal App with NativeBase and Solito"])[2]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Creating a Universal App with NativeBase and Solito');

        cy.go('back');
    },

    //Click to Navigate to next page
    nextpage: function(){
        cy.xpath('(//div[normalize-space()="Utility Props Specificity"])[5]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();
        cy.get('#page-title').should('have.text','Utility Props Specificity');

        cy.go('back');
    },

    //Validating the QuickNav bar
    quickNav: function(){
        cy.xpath('(//div[normalize-space()="Quick Nav"])').scrollIntoView();

        cy.xpath('(//*[contains(text(),"With React Native")])[2]').click();
        cy.get('#h2-with-react-native').should('be.visible')

        cy.xpath('(//*[contains(text(),"With NativeBase")])[2]').click();
        cy.get('#h2-with-nativebase').should('be.visible')
    },

    //Changing the Theme
    themechange : function(){
        cy.xpath('(//*[name()="path"][@fill="currentColor"])[3]')
        .should('be.visible').click();
    }


}
export default UtilityFirst