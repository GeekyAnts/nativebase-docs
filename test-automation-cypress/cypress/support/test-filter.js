/// <reference types="Cypress" />

const TestFilter = {
  any(tags, testFn) {
    const selectedTags = (Cypress.env('TEST_TAGS') || '').split(';');
    const found = tags.some((r) => selectedTags.indexOf(r) >= 0);

    if (found) {
      testFn();
    }
  },

  notIn(tags, testFn) {
    const selectedTags = (Cypress.env('TEST_TAGS') || '').split(';');
    const found = tags.some((r) => selectedTags.indexOf(r) >= 0);

    if (!found) {
      testFn();
    }
  },

  all(tags, testFn) {
    const selectedTags = (Cypress.env('TEST_TAGS') || '').split(';');

    if (
      tags
        .map((tag) => {
          return tags.length === selectedTags.length && selectedTags.indexOf(tag) !== -1;
        })
        .reduce((acc, cur) => acc && cur, true)
    ) {
      testFn();
    }
  }
};

export default TestFilter;
