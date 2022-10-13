describe('02- Films', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('Verifica se o input de pesquisa tem o comportamento padrão', () => {
  
      cy.get('[data-testid="input-search"]').should('be.visible').type('Castle in the Sky');
    });


    it('Verifica se os cards de filmes estão renderizados', () => {

        cy.get('[data-testid="result-card"]').should('be.visible');
    });

    it('Verifica se o card possui os elementos: img, h1, e p', () => {
  
        cy.get('[data-testid="img-card"]').should('be.visible');
        cy.get('[data-testid="title-card"]').should('be.visible');
        cy.get('[data-testid="element-card"]').should('be.visible');
    });

    it('Verifica se o card possui um botão que abre a modal', () => {
  
        cy.get('[data-testid="button-details"]').should('be.visible');
        cy.get('[data-testid="button-details"]', { timeout: 10000 }).eq(0).click({ multiple: true });
    });
});