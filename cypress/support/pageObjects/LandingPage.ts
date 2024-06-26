export default class LandingPage {
  private readonly landingPageUrl = 'http://localhost:3000';
  private readonly nameInputId = '#name-input';
  private readonly emailInputId = '#email-input';
  private readonly nameInputErrorId = '#name-input-error';
  private readonly emailInputErrorId = '#email-input-error';

  public open(): void {
    cy.visit(this.landingPageUrl);
  }

  public getNameErrorMessage(): Cypress.Chainable {
    return cy.get(this.nameInputErrorId).should('be.visible', { timeout: 5000 });
  }

  public getEmailErrorMessage(): Cypress.Chainable {
    return cy.get(this.emailInputErrorId).should('be.visible', { timeout: 5000 });
  }

  public setName(name: string): Cypress.Chainable {
    return cy.get(this.nameInputId).click().type(`${name}{enter}`).wait(500);
  }

  public setEmail(email: string): void {
    cy.get(this.emailInputId).click();
    cy.get(this.emailInputId).type(email);
    cy.get(this.emailInputId).type('{enter}').wait(500);
  }
}
