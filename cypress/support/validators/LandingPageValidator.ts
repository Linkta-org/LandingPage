import LandingPage from '../pageObjects/LandingPage';

enum ErrorMessages {
  NameContainsSpecialCharacters = 'Please use only letters, spaces, hyphens, and periods.',
  EmailAddressIncorrect = 'Invalid email format. Please check again.',
  EmailTooShort = 'The email is too short. Please check again.',
}

export default class LandingPageValidator {
  private readonly landingPage: LandingPage;

  public constructor(landingPage: LandingPage) {
    this.landingPage = landingPage;
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