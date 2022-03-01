describe('Project list specs', () => {
  it('visit the projects page', () => {
    cy.visit('/projects');
  });

  it('should search input has the focus when clicking on it', () => {
    // Act
    cy.visit('/projects');
    cy.findByPlaceholderText('Buscar proyecto').click();

    // Assert
    cy.findByPlaceholderText('Buscar proyecto').should('have.focus');
  });

  it('should filter the projects when searching', () => {
    //Arrange
    const search = 'mapfre';

    // Act
    cy.visit('/projects');
    cy.get('.MuiTableBody-root >.MuiTableRow-root').should('have.length', 5);
    cy.findByPlaceholderText('Buscar proyecto').as('searchInput');
    cy.get('@searchInput').type(search);

    // Assert
    cy.get('@searchInput').should('have.value', search);
    cy.get('.MuiTableBody-root >.MuiTableRow-root').should('have.length', 1);
  });

  it('should go to new project page when clicking on new project button', () => {
    // Act
    cy.visit('/projects');
    cy.findByText('Nuevo proyecto').click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/projects/0');
  });

  it('should go to edit project page when clicking on edit icon button', () => {
    // Act
    cy.visit('/projects');
    cy.get('[data-testid="1"] [aria-label="edit project"]').click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/projects/1');
  });

  it('should show delete modal when clicking on delete icon button', () => {
    // Act
    cy.visit('/projects');
    cy.get('[data-testid="1"] [aria-label="delete project"]').click();

    // Assert
    cy.get('.MuiDialog-container').should('be.visible');
  });

  it('should close delete modal without deleting the project when clicking on cancel button', () => {
    // Act
    cy.visit('/projects');
    cy.get('[data-testid="1"] [aria-label="delete project"]').click();

    // Assert
    cy.get('.MuiDialog-container').should('be.visible');

    //Act
    cy.findByText("Cancelar").click();

    //Assert
    cy.get('.MuiDialog-container').should('not.be.visible');
    cy.get('[data-testid="1"]').should('exist');
  });

  it('should close delete modal and delete the project when clicking on confirm button', () => {
    // Act
    cy.visit('/projects');
    cy.get('[data-testid="1"] [aria-label="delete project"]').click();

    // Assert
    cy.get('.MuiDialog-container').should('be.visible');

    //Act
    cy.findByText("Aceptar").click();

    //Assert
    cy.get('.MuiDialog-container').should('not.be.visible');
    cy.get('[data-testid="1"]').should('not.exist');
  });
});
