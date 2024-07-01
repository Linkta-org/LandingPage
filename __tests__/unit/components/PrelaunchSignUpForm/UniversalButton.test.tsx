import { screen } from 'test-utils';
import prelaunchSignUpFormSetup from 'test-utils/components/prelaunchSignUpFormSetup';

describe('UniversalButton component in PrelaunchSignUpForm', () => {
  it('renders the form submission UniversalButton accessibly and with the correct label', () => {
    prelaunchSignUpFormSetup();
    expect(screen.getByRole('button', { name: 'Get Early Access' })).toBeInTheDocument();
  });
});
