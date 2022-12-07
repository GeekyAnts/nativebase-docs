export default class GettingStartedNativebasePOM {

    visit() {
      cy.visit('https://docs.nativebase.io/getting-started')
    }
  
    
    /**
      "NativeBase" Box  > Navigation > "Installation" Button
      tag: div | purpose: navigation
    */
    clickInstallation() {
      return cy.get('(//*[normalize-space(.)="Installation"])[2]', 'pomS54hgEZmnSJG')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Setup NativeBase Provider" Button
      tag: div | purpose: navigation
    */
    clickSetupNativeBaseProvider() {
      return cy.get('(//*[normalize-space(.)="Setup NativeBase Provider"])[2]', 'pom4wh1cpsjQa8z')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Contribution" Button
      tag: div | purpose: navigation
    */
    clickContribution() {
      return cy.get('(//*[normalize-space(.)="Contribution"])[2]', 'pomPq74bRchvdtq')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Creating a Universal App with NativeBase..." Button
      tag: div | purpose: navigation
    */
    clickCreatingAUniversalAppWithNativeBaseAndSolitoNew() {
      return cy.get('(//*[contains(text(),"New")])[0]', 'pom4ZgC2LquPkuc')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Utility First" Button
      tag: div | purpose: navigation
    */
    clickUtilityFirst() {
      return cy.get('(//*[normalize-space(.)="Utility First"])[2]', 'pomrDhu96swrhUC')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Utility Props Specificity" Button
      tag: div | purpose: navigation
    */
    clickUtilityPropsSpecificity() {
      return cy.get('(//*[normalize-space(.)="Utility Props Specificity"])[2]', 'pomKhxJfTZ3K5tH')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Design Tokens" Button
      tag: div | purpose: navigation
    */
    clickDesignTokens() {
      return cy.get('(//*[normalize-space(.)="Design Tokens"])[2]', 'pomkufk9dcaijJh')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Pseudo Props: Overview" Button
      tag: div | purpose: navigation
    */
    clickPseudoPropsOverview() {
      return cy.get('(//*[normalize-space(.)="Pseudo Props: Overview"])[2]', 'pom4WqqQyqLqcQc')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Pseudo Props: Dos & Don'ts" Button
      tag: div | purpose: navigation
    */
    clickPseudoPropsDosDonTs() {
      return cy.get("(//*[normalize-space(.)='Pseudo Props: Dos & Don'ts'])[2]", 'pomWx2flidoP5gk')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Internal Pseudo Props" Button
      tag: div | purpose: navigation
    */
    clickInternalPseudoPropsNew() {
      return cy.get('(//*[contains(text(),"New")])[0]', 'pomwG8IUD8L9OgA')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Responsive" Button
      tag: div | purpose: navigation
    */
    clickResponsive() {
      return cy.get('(//*[normalize-space(.)="Responsive"])[2]', 'pomzAkjkTsp5mxe')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Utility Props" Button
      tag: div | purpose: navigation
    */
    clickUtilityProps() {
      return cy.get('(//*[normalize-space(.)="Utility Props"])[2]', 'pom4ufRa3w46UKS')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Color mode (Dark Mode)" Button
      tag: div | purpose: navigation
    */
    clickColorModeDarkMode() {
      return cy.get('(//*[normalize-space(.)="Color mode (Dark Mode)"])[2]', 'pomCGbmdvORXQgq')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "NativeBase Factory" Button
      tag: div | purpose: navigation
    */
    clickNativeBaseFactory() {
      return cy.get('(//*[normalize-space(.)="NativeBase Factory"])[2]', 'pomd7oFikQHesa8')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "SafeAreaView Props" Button
      tag: div | purpose: navigation
    */
    clickSafeAreaViewProps() {
      return cy.get('(//*[normalize-space(.)="SafeAreaView Props"])[2]', 'pom5f7RR65LXugz')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Strict Mode" Button
      tag: div | purpose: navigation
    */
    clickStrictMode() {
      return cy.get('(//*[normalize-space(.)="Strict Mode"])[2]', 'pomO7e13lRnapKE')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Accessibility" Button
      tag: div | purpose: navigation
    */
    clickAccessibility() {
      return cy.get('(//*[normalize-space(.)="Accessibility"])[2]', 'pomXGotp6iatmPr')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Default Theme" Button
      tag: div | purpose: navigation
    */
    clickDefaultTheme() {
      return cy.get('(//*[normalize-space(.)="Default Theme"])[2]', 'pomiFkiUVUp2zeg')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Theme" Button
      tag: div | purpose: navigation
    */
    clickCustomizingTheme() {
      return cy.get('(//*[normalize-space(.)="Customizing Theme"])[2]', 'pom1OdXRDPszvqK')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Fonts" Button
      tag: div | purpose: navigation
    */
    clickCustomizingFonts() {
      return cy.get('(//*[normalize-space(.)="Customizing Fonts"])[2]', 'pomkSSx7QtfIAc1')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Components" Button
      tag: div | purpose: navigation
    */
    clickCustomizingComponents() {
      return cy.get('(//*[normalize-space(.)="Customizing Components"])[2]', 'pom9lpb4SsiQcZn')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Making components dark mode compatible" Button
      tag: div | purpose: navigation
    */
    clickMakingComponentsDarkModeCompatible() {
      return cy.get('(//*[contains(text(),"Making components dark mode co")])[0]', 'pomcNMvw6fJwixp')
        .click();
    }
    
    /**
      "NativeBase" Box  > Navigation > "Breakpoints" Button
      tag: div | purpose: navigation
    */
    clickBreakpoints() {
      return cy.get('(//*[normalize-space(.)="Breakpoints"])[2]', 'pom1zFPkZ8Hwgjh')
        .click();
    }
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Installation Guide" Button
      href: /installation | tag: a | purpose: navigation
    */
    clickInstallationGuideSetupNativeBaseInYourProject() {
      return cy.get('(//*[contains(@class,"r-xkdzue")])[1]', 'pomW5Lqyb8Xswrn')
        .click();
    }
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Playground" Button
      href: /@native-base/nativebase-playground | tag: a | purpose: navigation
    */
    clickPlaygroundTryNativeBaseOnSnackByExpo() {
      return cy.get('//*[@href="https://snack.expo.dev/@native-base/nativebase-playground"]', 'pombGA19sCcjMj2')
        .click();
    }
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Theming" Button
      href: /default-theme | tag: a | purpose: navigation
    */
    clickThemingCreateYourOwnDesignSystem() {
      return cy.get('(//*[@href="/default-theme"])[2]', 'pomVz1beE25gPkq')
        .click();
    }
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Recipes" Button
      href: /login-signup-forms | tag: a | purpose: navigation
    */
    clickRecipesPopularRecipesForApps() {
      return cy.get('(//*[contains(text(),"Recipes")])[0]', 'pomHAjN6uWBdAkm')
        .click();
    }
    
    /**
      main page > "MadeWithNativeBase" Button
      tag: a | purpose: navigation
    */
    clickPaaoog90m4p6() {
      return cy.get('div>.r-lchren', 'pomOELWuJe56dAT')
        .click();
    }
    
    
    getHeading2() {
      return cy.get("//div/*[contains(text(),'What's New with NativeBase v3?')]", 'pomviucIZTAJGzu')
    }
    
    
    getUndefined2() {
      return cy.get('//span/*[contains(text(),"Multiplatform")]', 'pomeP554Hi5OYcK')
    }
    
    
    getUndefined3() {
      return cy.get('//span/*[contains(text(),"Inherently Beautiful")]', 'pomlGfkQT3YACy9')
    }
    
    
    getUndefined4() {
      return cy.get('//span/*[contains(text(),"Accessible")]', 'pomoDHLMGgFltvF')
    }
    
    
    getUndefined5() {
      return cy.get('//span/*[contains(text(),"Customisable")]', 'pomqmpvv4xWMStG')
    }
    
    
    getUndefined6() {
      return cy.get('//*[contains(text(),"NativeBase v1.x :")]', 'pomiwIQEKJtTJSl')
    }
    
    
    getUndefined7() {
      return cy.get('//*[contains(text(),"NativeBase v2.x :")]', 'pomnlMMgglacngi')
    }
    
    
    getUndefined8() {
      return cy.get('//*[contains(text(),"NativeBase v3.x :")]', 'pomIM2VfAfVUyK7')
    }
    
    

    //
    getHeadingABriefHistoryofNativeBase() {
      return cy.get('#h2-undefined', 'pomUuifyCElXxCQ').should('have.text','A Brief History of NativeBase')
    }
    
    
    getUndefined1() {
      return cy.get('(//div[preceding-sibling::*[descendant::text()="A Brief History of NativeBase"]]/div[1])[1]', 'pom7ajVDWt9VKBj')
    }
    
  }