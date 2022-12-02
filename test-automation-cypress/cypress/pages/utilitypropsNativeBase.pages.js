/// <reference types="cypress" />


const writefile = "/pages/files/utilityprops-1.txt"

var UtilityProps = {

    //Checking Page Title
    pageTitle: function(){
        cy.get('#page-title').should('have.text','Utility Props Specificity')
    },

    //Clicking and Copying the basic prop
    similarProps: function(){
        cy.xpath('(//*[contains(text(), "Copy")])[1]').click()
        cy.window().its('navigator.clipboard').invoke('readText').then(cy.log)
        // .then((copy)=>{
        //     cy.log(copy)
        //     console.log(copy);
        // })
        return this;
    },

    //Clicking and copying the BaseStyle prop
    similarprops2: function(){
        cy.xpath('(//*[contains(text(), "Copy")])[3]').click()
        cy.window().its('navigator.clipboard').invoke('readText').then(cy.log)
        // .then((copy)=>{
        //     cy.log(copy)
        //     console.log(copy);
        // })
    },

    //Clicking and Copying the analyzing both cases
    similarprops3: function(){
        cy.xpath('(//*[contains(text(), "Copy")])[3]').click()
        cy.window().its('navigator.clipboard').invoke('readText').then(cy.log)
        // .then((copy)=>{
        //     cy.log(copy)
        //     console.log(copy);
        // })

    },

    //Navigating to previous page
    previouspage: function(){
        cy.xpath('(//*[contains(text(), "Utility First")])[2]')
        .scrollIntoView({easing: 'linear'}).should('be.visible').click();

        cy.go('back');
    },

    //Navigating to next page
    nextPage: function(){
        cy.xpath('(//*[contains(text(), "Design Tokens")])[2]')
        .scrollIntoView({easing:'linear'}).should('be.visible').click();

        cy.go('back');
    }

   /* paste: function(){
      // cy.log( cy.type('{cmd+v}'));
      const copy = cy.xpath('(//*[contains(text(), "Copy")])[1]')
      cy.window().its('navigator.clipboard')
      .invoke('readText')
      .then((copy) =>{
        readText
       // cy.get("/Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pagescy.writeFile("/Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pages/files/utilityprops-1.txt", copy);/files/utilityprops-1.txt")
      // 
      })
     // cy.writeFile("/Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pages/files/utilityprops-1.txt", 'Hello World')
//cy.readFile("/Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pages/files/utilityprops-1.txt").then((text) => {
  //expect(text).to.equal('Hello World') // true
//})
      cy.readFile(writefile);
       cy.writeFile("Users/achantaprakash/Projects/Native Base/nativebase-docs/test-automation-cypress/cypress/pages/files/utilityprops-1.txt",cy.type('{cmd}v'),{force : true})
    cy.log("Written")
     //return this;
    }*/

}

export default UtilityProps;