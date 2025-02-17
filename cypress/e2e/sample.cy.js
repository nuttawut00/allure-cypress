describe('Test หน้าเว็บตัวอย่าง', () => {
    it('เช็คว่าหน้าเว็บโหลดได้', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('Kitchen Sink').should('be.visible');
    });
  
    it('สามารถกดปุ่มได้', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
      cy.url().should('include', '/commands/actions');
    });
  });
  