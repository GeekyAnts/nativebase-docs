/*
Cypress supports various locators such as 
tags, id, class, attributes, text, etc. 
Cypress also supports XPath Selectors; 
however, it needs installation of the third-party plugin cypress-xpath. 
Xpath has not been supported out of the box in the Cypress framework.
*/


var ActionsLocator = {

    email: function() {
           return '.action-email'
    },

    action_disabled: function() {
           return '.action-disabled'
    },

    search: function () {
       return '.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-ggk5by'
    },

    search_field: function () {
       return '#docsearch-input'
    },

    Installation_Guide: function () {
       return "//a[@href='/installation']"
    },

    Install_in_Expo_project: function () {
       return "//a[@href='/install-expo']"
    },
};

export default ActionsLocator;