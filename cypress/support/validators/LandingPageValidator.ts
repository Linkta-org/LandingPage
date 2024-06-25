import LandingPage from '../pageObjects/LandingPage';

enum ErrorMessages {
  NameContainsSpecialCharacters = 'Please use only letters, spaces, hyphens, and periods in your name.',
  EmailAddressIncorrect = 'Oops, the email address seems incorrect. Could you check it again?',
  EmailTooShort = 'Hmm, that email seems a bit short. Could you check it again?',
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

  public expectShortEmailErrorMessage(): void {
    this.landingPage
      .getEmailErrorMessage()
      .should('have.text', ErrorMessages.EmailTooShort);
  }
}