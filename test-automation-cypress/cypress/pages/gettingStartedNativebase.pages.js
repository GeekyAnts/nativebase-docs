/// <reference types="cypress" />


var HorizongalNavActionsPage = {

    visit() {
      cy.visit('https://docs.nativebase.io/')
    },
  
    /**
      "NativeBase" Box  > Navigation > "Installation" Button
      tag: div | purpose: navigation
    */
    clickInstallation() {
      return cy.get('(//*[normalize-space(.)="Installation"])[2]', 'pomrE76gt5SX3QX')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Setup NativeBase Provider" Button
      tag: div | purpose: navigation
    */
    clickSetupNativeBaseProvider() {
      return cy.get('(//*[normalize-space(.)="Setup NativeBase Provider"])[2]', 'pomg5ijwVPkHdLO')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Contribution" Button
      tag: div | purpose: navigation
    */
    clickContribution() {
      return cy.get('(//*[normalize-space(.)="Contribution"])[2]', 'pomLoLjKAKbzboj')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Creating a Universal App with NativeBase..." Button
      tag: div | purpose: navigation
    */
    clickCreatingAUniversalAppWithNativeBaseAndSolitoNew() {
      return cy.get('(//*[contains(text(),"New")])[0]', 'pomUWPuQMx1TBsL')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Utility First" Button
      tag: div | purpose: navigation
    */
    clickUtilityFirst() {
      return cy.get('(//*[normalize-space(.)="Utility First"])[2]', 'pom3iGo8cauzHj9')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Utility Props Specificity" Button
      tag: div | purpose: navigation
    */
    clickUtilityPropsSpecificity() {
      return cy.get('(//*[normalize-space(.)="Utility Props Specificity"])[2]', 'pomMNqHyYfkhGPg')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Design Tokens" Button
      tag: div | purpose: navigation
    */
    clickDesignTokens() {
      return cy.get('(//*[normalize-space(.)="Design Tokens"])[2]', 'pomMUwxzoRn8hTg')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Pseudo Props: Overview" Button
      tag: div | purpose: navigation
    */
    clickPseudoPropsOverview() {
      return cy.get('(//*[normalize-space(.)="Pseudo Props: Overview"])[2]', 'pomDBoajMZkzjaI')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Pseudo Props: Dos & Don'ts" Button
      tag: div | purpose: navigation
    */
    clickPseudoPropsDosDonTs() {
      return cy.get("(//*[normalize-space(.)='Pseudo Props: Dos & Don'ts'])[2]", 'pomK1T3VU5VQTAW')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Internal Pseudo Props" Button
      tag: div | purpose: navigation
    */
    clickInternalPseudoPropsNew() {
      return cy.get('(//*[contains(text(),"New")])[0]', 'pomuAzhaiLlrpPc')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Responsive" Button
      tag: div | purpose: navigation
    */
    clickResponsive() {
      return cy.get('(//*[normalize-space(.)="Responsive"])[2]', 'pomNYlf7il5cLA4')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Utility Props" Button
      tag: div | purpose: navigation
    */
    clickUtilityProps() {
      return cy.get('(//*[normalize-space(.)="Utility Props"])[2]', 'pomafRgn85ItEz1')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Color mode (Dark Mode)" Button
      tag: div | purpose: navigation
    */
    clickColorModeDarkMode() {
      return cy.get('(//*[normalize-space(.)="Color mode (Dark Mode)"])[2]', 'pomxOghlDMY79PI')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "NativeBase Factory" Button
      tag: div | purpose: navigation
    */
    clickNativeBaseFactory() {
      return cy.get('(//*[normalize-space(.)="NativeBase Factory"])[2]', 'pom279w9EHfLgdN')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "SafeAreaView Props" Button
      tag: div | purpose: navigation
    */
    clickSafeAreaViewProps() {
      return cy.get('(//*[normalize-space(.)="SafeAreaView Props"])[2]', 'pom4wJiwlHYQwCo')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Strict Mode" Button
      tag: div | purpose: navigation
    */
    clickStrictMode() {
      return cy.get('(//*[normalize-space(.)="Strict Mode"])[2]', 'pomCkegc9GylUZo')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Accessibility" Button
      tag: div | purpose: navigation
    */
    clickAccessibility() {
      return cy.get('(//*[normalize-space(.)="Accessibility"])[2]', 'pomJgiJf1dLudzl')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Default Theme" Button
      tag: div | purpose: navigation
    */
    clickDefaultTheme() {
      return cy.get('(//*[normalize-space(.)="Default Theme"])[2]', 'pomcV1fL18LRUNv')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Theme" Button
      tag: div | purpose: navigation
    */
    clickCustomizingTheme() {
      return cy.get('(//*[normalize-space(.)="Customizing Theme"])[2]', 'pomOiscjRKTn9Mi')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Fonts" Button
      tag: div | purpose: navigation
    */
    clickCustomizingFonts() {
      return cy.get('(//*[normalize-space(.)="Customizing Fonts"])[2]', 'pom8BFlzXRp1xDA')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Customizing Components" Button
      tag: div | purpose: navigation
    */
    clickCustomizingComponents() {
      return cy.get('(//*[normalize-space(.)="Customizing Components"])[2]', 'pomlsGgkTfdcVtn')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Making components dark mode compatible" Button
      tag: div | purpose: navigation
    */
    clickMakingComponentsDarkModeCompatible() {
      return cy.get('(//*[contains(text(),"Making components dark mode co")])[0]', 'pomIUdJ1nO4NfZj')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "Breakpoints" Button
      tag: div | purpose: navigation
    */
    clickBreakpoints() {
      return cy.get('(//*[normalize-space(.)="Breakpoints"])[2]', 'pomBsn6ue5vCdK1')
        .click();
    },

    /**
      "NativeBase" Box  > Navigation > "Using Theme" Button
      tag: div | purpose: navigation
    */
    clickUsingTheme() {
      return cy.get('(//*[normalize-space(.)="Using Theme"])[2]', 'pomtyghWg3egmb4')
        .click();
    },
    
    /**
      "NativeBase" Box  > Navigation > "TypeScript" Button
      tag: div | purpose: navigation
    */
    clickTypeScript() {
      return cy.get('(//*[normalize-space(.)="TypeScript"])[2]', 'pomtftcWeK6wGMr')
        .click();
    },
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Installation Guide" Button
      href: /installation | tag: a | purpose: navigation
    */
    clickInstallationGuideSetupNativeBaseInYourProject() {
      return cy.get('(//*[contains(@class,"r-xkdzue")])[1]', 'pom6oWfzbjw4DZ1')
        .click();
    },
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Playground" Button
      href: /@native-base/nativebase-playground | tag: a | purpose: navigation
    */
    clickPlaygroundTryNativeBaseOnSnackByExpo() {
      return cy.get('//*[@href="https://snack.expo.dev/@native-base/nativebase-playground"]', 'pomTMYL4fJJAryq')
        .click();
    },
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Theming" Button
      href: /default-theme | tag: a | purpose: navigation
    */
    clickThemingCreateYourOwnDesignSystem() {
      return cy.get('(//*[@href="/default-theme"])[2]', 'pompHwLcrjyem5a')
        .click();
    },
    
    /**
      "NativeBase" Box  > "What's New with NativeBase v3?" Box > "Recipes" Button
      href: /login-signup-forms | tag: a | purpose: navigation
    */
    clickRecipesPopularRecipesForApps() {
      return cy.get('(//*[contains(text(),"Recipes")])[0]', 'pomVsZ2GZzoMJio')
        .click();
    },
    
    /**
      main page > "MadeWithNativeBase" Button
      tag: a | purpose: navigation
    */
    clickPaaoog90m4p6() {
      return cy.get('div>.r-lchren', 'pomVMU3tVNUiSjU')
        .click();
    }
    
  }