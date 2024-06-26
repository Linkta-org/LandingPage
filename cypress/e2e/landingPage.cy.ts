// import LandingPage from '../support/pageObjects/LandingPage';
// import LandingPageValidator from '../support/validators/LandingPageValidator';

// describe('Landing Page', () => {
//   let landingPage: LandingPage;
//   let landingPageValidator: LandingPageValidator;

//   beforeEach(() => {
//     landingPage = new LandingPage();
//     landingPageValidator = new LandingPageValidator(landingPage);
//     landingPage.open();
//   });

//   it('should validate if name input contains special characters', () => {
//     landingPage.setName('Fake Name!@#');
//     landingPageValidator.expectErrorNameContainsSpecialCharacters();
//   });

//   it('should validate if email input is incorrect', () => {
//     landingPage.setEmail('fake@email');
//     landingPageValidator.expectErrorEmailAddressIncorrect();
//   });

//   it('should validate if email input is too short', () => {
//     landingPage.setEmail('abc');
//     landingPageValidator.expectShortEmailErrorMessage();
//   });
// });