/// <reference types="cypress" />

import ActionsLocator from '../locators/actions.locator';

var ActionsPage = {
    enter_email: function(email) {
        cy.get(ActionsLocator.email())
        .type(email).should('have.value', email)
    },

    type_special_keys_in_email_field: function(){
        // .type() with special character sequences
        cy.get(ActionsLocator.email())
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')

        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
    },

    paste: function() {
        cy.get('.r-1t49g83 > .css-1dbjc4n').click()
        .type("{cmd+v}")
    },

    enter_email_slow_type: function(email) {
        // Delay each keypress by 0.1 sec
        cy.get(ActionsLocator.email())
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
        .screenshot()
    },

    disabled_check: function() {
        cy.get(ActionsLocator.action_disabled())
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        .type('disabled error checking', { force: true })
        .should('have.value', 'disabled error checking')
    },


    enter_search: function(search) {
        cy.get(ActionsLocator.search())
        .type(search)
        .screenshot()
    },

    type_special_keys_in_search_field: function(invalid_search){
        cy.get(ActionsLocator.search())
        .type(invalid_search)
        .screenshot()
    },
 
 //   cy.get('#docsearch-input').type('{backspace}');
    
    enter_search_slow_type: function(search) {
        // Delay each keypress by 0.1 sec
        cy.get(ActionsLocator.search())
        .type('button', { delay: 100 })
        .should('have.value', 'slow.button')
        .screenshot()
    }, 

    select_Installation_Guide: function() {
        cy.contains('Installation Guide')
        cy.get('.r-1atpuzl > [href="/installation"]').click()
        cy.contains('Install in Expo project')
        .screenshot()
    },

    select_Install_in_Expo_project_new: function() {
        cy.contains('Install in Expo project')
        cy.get('[href="/install-expo"]').click()
        cy.contains('Install in Expo project')
    },

    select_Install_in_Expo_project_existing: function() {
        cy.contains('Existing')
        cy.get('.css-901oao r-1mtiv16 r-cygvgh r-13uqrnb r-19uokag r-f0eezp r-104ivgm')
        cy.get('.css-901oao r-1njgeiw r-168ni3w r-1o4mh9l r-13uqrnb r-16dba41 r-oxtfae r-dhbnww')
        cy.get('.css-901oao r-1njgeiw r-168ni3w r-1o4mh9l r-13uqrnb r-16dba41 r-oxtfae r-dhbnww')
        cy.get('.r-1t49g83').click();

        // Click on <div> "npm install native-base"
        cy.get('pre:nth-child(1) .token-line').click();
      
        // Click     on <div> "npm install native-base"
        cy.get('pre:nth-child(1) .token-line').click();
    
        //    cy.get('button')
        cy.exec("ActionsPage.paste")
        },
}

export default ActionsPage;