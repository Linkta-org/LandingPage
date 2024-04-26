import type { UserDataValidation } from '../schemas/userDataValidationSchema';
import type { TextInputConfig } from '../types/signupForm';

/**
 * Creates a text input configuration object for form fields.
 * @param {keyof UserDataValidation} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {boolean} required - Indicates if the field is required.
 * @param {string} tooltipLabel - The label text for Tooltip component.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
const createTextInputConfig: (
  field: keyof UserDataValidation,
  label: string,
  required: boolean,
  tooltipLabel?: string
) => TextInputConfig = (field, label, required, tooltipLabel) => {
  return { field, label, required, tooltipLabel };
};

/**
 * Configuration array for text input fields used in the PreLaunchSignUpForm.
 * It includes configuration for various fields such as name, email, interests, etc.
 * @type {TextInputConfig[]}
 */
const textInputConfig: TextInputConfig[] = [
  createTextInputConfig('name', 'What is your name? (required)', true),
  createTextInputConfig('email', 'Where can we email you? (required)', true),
  createTextInputConfig(
    'interests',
    'What would you love to learn? (optional)',
    false,
    'List any topics you are interested in learning with Linkta, such as design or coding. Please separate your interests with commas.'
  ),
  createTextInputConfig(
    'source',
    'How did you find us? (optional)',
    false,
    'Let us know how you heard about us, for example, through LinkedIn or from a friend.'
  ),
];

export default textInputConfig;
