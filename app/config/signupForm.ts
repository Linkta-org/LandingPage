import type { FormValues, TextInputConfig } from '../types/signupForm';

/**
 * Creates a text input configuration object for form fields.
 * @param {keyof FormValues} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {string} placeholder - The placeholder text for the field.
 * @param {boolean} required - Indicates if the field is required.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
const createConfigItem: (
  field: keyof FormValues,
  label: string,
  placeholder: string,
  required: boolean
) => TextInputConfig = (field, label, placeholder, required) => {
  return { field, label, placeholder, required };
};

/**
 * Configuration array for text input fields used in the PreLaunchSignUpForm.
 * It includes configuration for various fields such as name, email, interests, etc.
 * @type {TextInputConfig[]}
 */
const textInputConfig: TextInputConfig[] = [
  createConfigItem(
    'name',
    'First Name (required)',
    'Enter your first name',
    true
  ),
  createConfigItem('email', 'Email (required)', 'Enter your email', true),
  createConfigItem(
    'interests',
    'Interests (optional)',
    'Enter your interests, separated by commas (e.g., Design, Programming)',
    false
  ),
  createConfigItem(
    'source',
    'How did you hear about us? (optional)',
    'Enter your source',
    false
  ),
  createConfigItem(
    'features',
    'What features are you most interested in? (optional)',
    'Describe features, separated by commas (e.g., Collaboration, Sharing)',
    false
  ),
];

export default textInputConfig;
