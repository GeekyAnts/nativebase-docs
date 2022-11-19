const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "projectId": "2m63dx",
  "reporter": "cypress-multi-reporters",

  "reporterOptions": {
    "configFile": "cypress/support/cypress-multi-reporters.json"
  },

  "env": {
    "RETRIES": 2,
    "allureResultsPath": "allure-results",
    "allure": true
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    experimentalStudio: true,
    "specPattern": "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },

  "component": {
    "devServer": {
      "framework": "next",
      "bundler": "webpack"
    }
  }
});