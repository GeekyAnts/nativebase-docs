/// <reference types="cypress" />

var InstallationNativebase = {


  /**
    "NativeBase" Box  > "react-native-web" Button
    tag: div | purpose: navigation
  */
    installInReactNativeProjectWebHyperlink: function() {
    return cy.xpath("//*[contains(text(),'react-native-web')]")
  },
  
  /**
    "NativeBase" Box  > "Install in Expo project" Button
    href: /install-expo | tag: a | purpose: navigation
  */
    installInExpoHyperlink: function()  {
      return cy.xpath("//a[@href='https://docs.expo.dev/get-started/installation/']")
    },

    /**
    "NativeBase" Box  > "Expo" Button
    tag: div | purpose: navigation
  */
  installInExpoProject: function()  {
    return cy.xpath('//*[contains(text(), "Install in Expo project")]')
  },
  
  clickT9egoe35viky2: function()  {
    return cy.xpath('(//*[contains(text(),"Follow this guide to install N")])[0]')
  },
  
  /**
    "NativeBase" Box  > "Install in Next.js project" Button
    href: /install-next | tag: a | purpose: navigation
  */


  clickT9egoe35viky3: function()  {
    return cy.xpath('(//*[contains(text(),"Follow this guide to install N")])[0]')
  },
  
  /**
    "NativeBase" Box  > "Install in Create React App project" Button
    href: /install-cra | tag: a | purpose: navigation
  */
  clickT9egoe35viky1: function()  {
    return cy.xpath('(//*[contains(text(),"Follow this guide to install N")])[0]')
  },
  
  /**
    "NativeBase" Box  > "NativeBase VS Code Extensions" Button
    tag: div | purpose: navigation
  */
  clickNativeBaseVSCodeExtensions: function()  {
    return cy.get('//*[contains(@class,"r-cygvgh")]/*[normalize-space(.)="NativeBase VS Code Extensions"]')
  },
  
  /**
    "NativeBase" Box  > "Previous" Button
    tag: div | purpose: navigation
  */
    previousBottomButton: function()  {
    return cy.xpath('(//*[contains(text(),"Previous")])')
  },
  
  /**
    "NativeBase" Box  > "Next" Button
    tag: div | purpose: navigation
  */
  nextBottomButton: function()  {
    return cy.get('.r-1wtj0ep > .r-1jj8364').contains("Next")

  },
  
  /**
    main page > "MadeWithNativeBase" Button
    tag: a | purpose: navigation
  */
  clickMadeWithNativeBase: function()  {
    return cy.get('#nativebase-body-light>a')
  },
  
  
  getInstallInReactNativeProject: function()  {
    return cy.get('//*[contains(text(),"Install in React Native project")]')
  },
  
  
  videoExplanation: function()  {
    return cy.get('[alt="aang transitioning to avatar state"]')
  }
  
}
export default InstallationNativebase;