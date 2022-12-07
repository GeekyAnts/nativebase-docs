var DesignTokens = {

    pageTitle:function(){
        return cy.get("#page-title").should("have.text","Design tokens");
    },
styledSystemLink:function(){
    const title= cy.get('a[href="https://styled-system.com/theme-specification/"]');
    title.invoke("removeAttr", "target").click();
    cy.get('a[href="#theme-specification"]').should(
        "have.text",
        "Theme Specification"
      )
cy.go("back");
},
defaultNBThemeLink :function(){
    cy.get('a[href="/default-theme"]').click();
    cy.url().should("eq", "https://docs.nativebase.io/default-theme");
    cy.go("back");

},
  hereLink:function(){
    cy.contains("here").click();
    cy.url().should("include", "https://docs.nativebase.io/customizing-theme");
    cy.go("back");

  },
  PreviousPage:function(){
    cy.xpath('(//*[contains(text(), "Utility Props Specificity")])[2]').click();
    cy.get("#page-title").should("have.text", "Utility Props Specificity");
    cy.go("back");

  },
  NextPage:function(){
    // cy.get('a[href="/pseudo-props"]').click();
    cy.xpath('(//*[contains(text(), "Pseudo Props: Overview")])[2]').click();
    cy.get("#page-title").should("have.text", "Pseudo props: Overview");
    cy.go("back");

  }
}









export default DesignTokens;