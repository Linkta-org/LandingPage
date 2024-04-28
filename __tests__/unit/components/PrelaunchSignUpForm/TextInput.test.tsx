import { render, screen, userEvent } from 'test-utils';
import PrelaunchSignUpForm, { PrelaunchSignUpFormProps } from '../../../../app/components/main-content/PrelaunchSignUpForm'

jest.mock('@/app/services/firestore', () => ({
  storeUserDataIfNew: jest.fn(() => Promise.resolve())
}));

describe('TextInput components in PrelaunchSignUpForm', () => {
  const setup = () => {
    jest.clearAllMocks();
    
    const mockSetFlowState: jest.Mock = jest.fn();
    const props: PrelaunchSignUpFormProps = {
      setFlowState: mockSetFlowState,
    };

    const user = userEvent.setup();
    const renderResult = render(<PrelaunchSignUpForm {...props} />)
    return { user, ...renderResult }
  };

  it('renders the name TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'What is your name? (required)' })).toBeInTheDocument();
  });
  
  it('renders the email TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'Where can we email you? (required)' })).toBeInTheDocument();
  });  

  it('renders the interests TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'What would you love to learn? (optional)' })).toBeInTheDocument();
  });

  it('renders the source TextInput accessibly and with the correct label', () => {
    setup();
    expect(screen.getByRole('textbox', { name: 'How did you find us? (optional)' })).toBeInTheDocument();
  });

  it('allows users to enter text into the name TextInput', async () => {
    const { user } = setup();
    const input = screen.getByRole('textbox', { name: 'What is your name? (required)' }) as HTMLInputElement;
    await user.type(input, 'Mabel Wuckert');
    expect(input.value).toBe('Mabel Wuckert');
  });

  it('allows users to enter text into the email TextInput', async () => {
    const { user } = setup();
    const input = screen.getByRole('textbox', { name: 'Where can we email you? (required)'}) as HTMLInputElement;
    await user.type(input, 'mabel.w@gmail.com');
    expect(input.value).toBe('mabel.w@gmail.com');
  });

  it('allows users to enter text into the interests TextInput', async () => {
    const { user } = setup();
    const input = screen.getByRole('textbox', { name: 'What would you love to learn? (optional)'}) as HTMLInputElement;
    await user.type(input, 'Coding, Design, Learning');
    expect(input.value).toBe('Coding, Design, Learning');
  });

  it('allows users to enter text into the source TextInput', async () => {
    const { user } = setup();
    const input = screen.getByRole('textbox', { name: 'How did you find us? (optional)'}) as HTMLInputElement;
    await user.type(input, 'LinkedIn');
    expect(input.value).toBe('LinkedIn');
  });
});
