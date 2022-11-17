/// <reference types="cypress" />

import HorizontalNavLocator from '../locators/horizontalNav.locator'

export default class horizoltalNavigationTabs {

    visit() {
      cy.visit('https://docs.nativebase.io/')
    }
/**
      "NativeBase" Box  > Navigation > "NativeBase" Button
      tag: a | purpose: navigation
    */
      NativeBase() {
        return cy.get('(//*[normalize-space(.)="NativeBase"])[1]', 'pomJMSsx1GpkcVa')
      }
      
      /**
        "NativeBase" Box  > Navigation > "3.4.x" Button
        id: react-aria-3 | tag: div | purpose: navigation
      */
      DropDown() {
        return cy.get('#react-aria-3', 'pomLGNBm9qit4Xk')
      }
      
      /**
        "NativeBase" Box  > Navigation > "Announcing NativeBase Startup+ bundle 🎉" Button
        href: ?utm_source={paramValue}&utm_medium={paramValue}&u | tag: a | purpose: navigation
      */
      StartupBundle() {
        return cy.get('//*[@href="https://startup.nativebase.io?utm_source=direct&utm_medium=banner&utm_campaign=nb_docs"]', 'pomTeJ2hoPihgcN')
      }
      
      /**
        "NativeBase" Box  > Navigation > "Search" Button
        tag: div | purpose: navigation
      */
      SearchBox() {
        return cy.get('(//*[contains(text(),"Search")])[0]', 'pomnVpaOytSPPCJ')
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /@nativebase?utm_source={id}&utm_medium={paramValu | tag: a | purpose: navigation
      */
      FigmaIcon() {
        return cy.get('(//*[@href="https://www.figma.com/@nativebase?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_figma"])[1]', 'pomB16w9MEkU7JU')
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /GeekyAnts/nativebase | tag: a | purpose: navigation
      */
      GitIcon() {
        return cy.get('(//*[@href="https://github.com/GeekyAnts/nativebase"])[1]', 'pomnK3baDXweWLL')
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        href: /discord | tag: a | purpose: navigation
      */
      DiscordIcon() {
        return cy.get('(//*[@href="/discord"])[1]', 'pomDhejPMugesjS')
      }
      
      /**
        "NativeBase" Box  > Navigation > IconButton
        tag: div | purpose: navigation | class: r-lrvibr
      */
      LightDarkToggle() {
        return cy.get('(//*[@role="button"])[1]', 'pomO6QXLoJSuoMz')
      }
      
      /**
        "NativeBase" Box  > Navigation > "Hire us" Button
        href: /hire?utm_source={paramValue}&utm_medium={paramVal | tag: a | purpose: navigation
      */
      HireUs() {
        return cy.get('(//*[normalize-space(.)="Hire us"])[1]', 'pomSBsTZYQY6t1v')
      }
      
      /**
        "NativeBase" Box  > Navigation > "Getting Started" Button
        tag: div | purpose: navigation
      */
      GettingStarted() {
        return cy.get('(//*[normalize-space(.)="Getting Started"])[2]', 'pomBcibbggTCCdM')
      }
    }
      