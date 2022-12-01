var CreatingUniversalAppWithNB = {
    
    pageTitle: function(){
        return cy.get("#page-title").should("have.text","Creating a Universal App with NativeBase and Solito");
    },
    githubRepo:function(){
return cy.get('a[href="https://github.com/GeekyAnts/nativebase-templates/tree/master/solito-universal-app-template-nativebase"]').click();
    }
}
export default CreatingUniversalAppWithNB;