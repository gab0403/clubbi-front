describe('01- Header', () => {
  const hasHeader = () => {
    cy.get('[data-testid="img-header"]');
  };

  it('Verifica se há o elementos img.', () => {
    cy.visit('http://localhost:3000');

    hasHeader();
  });
});
