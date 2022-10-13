describe('03- Details', () => {
  beforeEach(() => {
    cy.visit('https://frolicking-gingersnap-ed9543.netlify.app/');
    cy.get('[data-testid="button-details"]', { timeout: 10000 }).eq(1).click({ multiple: true });
  });

  it('Verifica se os detalhes possuem os elementos: img, h1, p e li', () => {
    cy.get('[data-testid="img-banner"]').should('be.visible');
    cy.get('[data-testid="title-details"]').should('be.visible');
    cy.get('[data-testid="element-details"]').should('be.visible');
  });

  it('Verifica se os detalhes, em que não há pessoas e locais, possuem os elementos: img e h1', () => {
    cy.get('[data-testid="img-banner"]').should('be.visible');
    cy.get('[data-testid="title-details"]').should('be.visible');
  });

  it('Verifica se o botão de fechar os detalhes tem o comportamento padrão', () => {
    cy.get('[data-testid="button-details"]').should('be.visible');
    cy.get('[data-testid="button-close"]', { timeout: 10000 }).eq(0).click();
  });
});
