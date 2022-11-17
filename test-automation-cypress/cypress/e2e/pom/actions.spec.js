/// <reference types="cypress" />

import TestFilter from '../../support/test-filter';
import ActionsLocator from '../../locators/actions.locator';
import ActionsPage from '../../pages/actions.pages'
import ActionsConstant from '../../constants/actions.constants'

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://docs.nativebase.io')
  })

  // Checking Landing page
  // TestFilter.any(['smoke', 'regression', ''], () => {
  //   it('.type() Valid search - search element', () => {
  //     ActionsPage.enter_search(ActionsConstant.search)
  //   })
  // })


  // TestFilter.any(['regression', ''], () => {
  //   it('.type() InValid search - type into a DOM element', () => {
  //     ActionsPage.type_special_keys_in_search_field(ActionsConstant.invalid_search)
  //   })
  // })

  TestFilter.any(['sanity', 'regression', ''], () => {
    it('Test Installation Guide', () => {
      ActionsPage.select_Installation_Guide()
      ActionsPage.select_Install_in_Expo_project_new()
      ActionsPage.select_Install_in_Expo_project_existing()
    })
  })
})