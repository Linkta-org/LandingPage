import { validateEmail, validateMinLength } from "../utils/formValidation";
import type { ValidationFunction } from '../types/signupForm';

interface TextInputConfig {
  field: string;
  label: string;
  placeholder: string;
  validate?: ValidationFunction;
  required?: boolean;
}

/**
 * Creates a text input configuration object for form fields.
 * @param {string} field - The name of the field.
 * @param {string} label - The label text for the field.
 * @param {string} placeholder - The placeholder text for the field.
 * @param {ValidationFunction} validate - The validation function to apply to the field.
 * @param {boolean} [required=false] - Indicates if the field is required.
 * @returns {TextInputConfig} The configuration object for a text input field.
 */
function createConfigItem(
  field: string,
  label: string,
  placeholder: string,
  validate: ValidationFunction,
  required = false
): TextInputConfig {
  return { field, label, placeholder, validate, required };
}

/**
 * Configuration array for text input fields used in the PreLaunchSignUpForm.
 * It includes configuration for various fields such as name, email, interests, etc.
 * @type {TextInputConfig[]}
 */
const textInputConfig: TextInputConfig[] = [
  createConfigItem('name', 'Name (required)', 'Enter your name', validateMinLength(1, 'Name'), true),
  createConfigItem('email', 'Email (required)', 'Enter your email', validateEmail, true),
  createConfigItem('interests', 'Interests (optional)', 'Enter your interests', validateMinLength(3, 'Interests')),
  createConfigItem('source', 'How did you hear about us? (optional)', 'Enter your source', validateMinLength(3, 'Source')),
  createConfigItem('features', 'What features are you most interested in? (optional)', 'Describe features', validateMinLength(5, 'Features'))
];

export default textInputConfig;
