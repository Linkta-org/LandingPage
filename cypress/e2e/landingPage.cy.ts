import LandingPage from '../support/pageObjects/LandingPage';
import LandingPageValidator from '../support/validators/LandingPageValidator';

describe('Landing Page', () => {
  let landingPage: LandingPage;
  let landingPageValidator: LandingPageValidator;

  beforeEach(() => {
    landingPage = new LandingPage();
    landingPageValidator = new LandingPageValidator(landingPage);
    landingPage.open();
  });

  it('should contain a footer with the text ©2024 Linkta L.L.C. All rights reserved.', () => {
    landingPageValidator.expectFooterTextToBe('©2024 Linkta L.L.C. All rights reserved.');
  });

  it('should validate if name input contains special characters', () => {
    landingPage.checkPrivacyPolicy();
    landingPage.setName('Fake Name!@#');
    landingPageValidator.expectErrorNameContainsSpecialCharacters();
  });

  it('should validate if email input is incorrect', () => {
    landingPage.checkPrivacyPolicy();
    landingPage.setEmail('fake@email');
    landingPageValidator.expectErrorEmailAddressIncorrect();
  });

  it('should validate if email input is too short', () => {
    landingPage.checkPrivacyPolicy();
    landingPage.setEmail('abc');
    landingPageValidator.expectShortEmailErrorMessage();
  });
});