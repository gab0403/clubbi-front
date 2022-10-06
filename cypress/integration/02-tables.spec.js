describe('02- Tables', () => {
  const hasElements = () => {
    cy.get('[data-testid="input-search"]');
    cy.get('[data-testid="table"]');
    cy.get('[data-testid="result-table"]');
  };

  const endpoints = () => {
    cy.visit('http://localhost:3000/films');
    cy.visit('http://localhost:3000/actors');
    cy.visit('http://localhost:3000/locations');
  };

  it('Verifica se há tabela e input de pesquisa', () => {
    endpoints();

    hasElements();
  });

  it('Verifica se o input de pesquisa tem o comportamento padrão na rota /films', () => {
    cy.visit('http://localhost:3000/films');

    cy.get('[data-testid="input-search"]').should('be.visible').type('Castle in the Sky');
  });

  it('Verifica se o input de pesquisa tem o comportamento padrão na rota /actors', () => {
    cy.visit('http://localhost:3000/actors');

    cy.get('[data-testid="input-search"]').should('be.visible').type('Pazu');
  });

  it('Verifica se o input de pesquisa tem o comportamento padrão na rota /locations', () => {
    cy.visit('http://localhost:3000/locations');

    cy.get('[data-testid="input-search"]').should('be.visible').type('Gutiokipanja');
  });
});
