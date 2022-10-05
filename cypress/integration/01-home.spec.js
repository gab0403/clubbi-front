describe('01- Header', () => {
  const hasHeader = () => {
    cy.get('[data-testid="img-header"]');
    cy.get('[data-testid="button-films"]');
    cy.get('[data-testid="button-actors"]');
    cy.get('[data-testid="button-locations"]');
  };

  it('Verifica se há os elementos imagem e buttons de redirecionamento para a tabela de filmes, atores e locais.', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="img-header"]');
    cy.get('[data-testid="button-films"]');
    cy.get('[data-testid="button-actors"]');
    cy.get('[data-testid="button-locations"]');
  });

  it('Verifica se ao clicar no botão de filmes redireciona para a rota /films', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="button-films"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/films'));
  });

  it('Verifica se há header com seus elementos na rota de films', () => {
    cy.visit('http://localhost:3000/films');

    hasHeader();
  });

  it('Verifica se ao clicar no botão de atores redireciona para a rota /actors', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="button-actors"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/actors'));
  });

  it('Verifica se há header com seus elementos na rota de actors', () => {
    cy.visit('http://localhost:3000/actors');

    hasHeader();
  });

  it('Verifica se ao clicar no botão de locais redireciona para a rota /locations', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="button-locations"]').click();
    cy.location().should((loc) => expect(loc.pathname).to.eq('/locations'));
  });

  it('Verifica se há header com seus elementos na rota de locations', () => {
    cy.visit('http://localhost:3000/locations');

    hasHeader();
  });
});
