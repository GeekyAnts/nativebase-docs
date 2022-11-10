before(() => {
    cy.log('Global Before Hook #########################');
});

after(() => {
    cy.log('Global After Hook ##########################');
});

beforeEach(() => {
    cy.log('I run before every test in every spec file*******')
});

afterEach(() => {
    cy.log('I run after each every test in every spec file-------')
});
