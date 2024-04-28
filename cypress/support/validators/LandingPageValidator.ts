import LandingPage from '../pageObjects/LandingPage';

enum ErrorMessages {
  NameContainsSpecialCharacters = 'Looks like your name contains some special characters. Could you check it again?',
  EmailAddressIncorrect = 'Oops, the email address seems incorrect. Could you check it again?',
}

export default class LandingPageValidator {
  private readonly landingPage: LandingPage;

  public constructor(landingPage: LandingPage) {
    this.landingPage = landingPage;
  }

  public expectHeaderTitleToBe(expectedTitle: string): void {
    this.landingPage.getHeaderTitle().should('have.text', expectedTitle);
  }

  public expectErrorNameContainsSpecialCharacters(): void {
    this.landingPage
      .getNameErrorMessage()
      .should('have.text', ErrorMessages.NameContainsSpecialCharacters);
  }

  public expectErrorEmailAddressIncorrect(): void {
    this.landingPage
      .getEmailErrorMessage()
      .should('have.text', ErrorMessages.EmailAddressIncorrect);
  }
}
