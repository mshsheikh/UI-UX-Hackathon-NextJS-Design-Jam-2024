describe('Next.js Website', () => {
  it('Should load the homepage', () => {
    cy.visit('http://www.furniro-mshsheikh.vercel.app');

    cy.contains('').should('exist');
  });
});
