var CreatingUniversalAppWithNB = {
    
    pageTitle: function(){
        return cy.get("#page-title").should("have.text","Creating a Universal App with NativeBase and Solito");
    },
    githubWithoutTypecript:function(){
        cy.get('a[href="https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase"]').click();
        cy.go("back");
        return this;
},

    githubWithTypecript:function(){
        cy.get('a[href="https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase-typescript"]').click();
        cy.go("back");
        return this;  
    },
     previousButton:function(){
        cy.get('.r-lchren > .r-1qahzrx > .css-4rbku5 > .r-1yvu97').click();
        this.previousPageTitle;
        cy.get('.r-1jj8364 > .r-1qahzrx > .css-4rbku5 > .r-1yvu97').click();//next button of contribution page
        //cy.go("back");

        return this; 
     },
        previousPageTitle: function(){
        return  cy.get("#page-title").should("have.text","Contributing to NativeBase");
        },
        NextButton:function(){
        
        cy.get('.r-1wtj0ep > .r-1jj8364').click();//utlity first next button
        this.NextPageTitle;
        cy.go("back");
        cy.log("Doneee")
        return this; 
        },
         NextPageTitle: function(){
        return cy.get("#page-title").should("have.text","Utility First");
           
        },
//hi

     }
           

export default CreatingUniversalAppWithNB;