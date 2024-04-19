import { ALLOWED_NAME_CHARS } from './formInitialization';

/**
 * Validates if the string meets the minimum length requirement.
 * @param {number} minLength - The minimum number of characters required.
 * @param {string} field - The name of the field to validate.
 * @returns {string|undefined|null} - Returns `null` if the value satisfies the minimum length requirement,`undefined` if the input is an empty string (useful for optional fields),or an error message if validation fails.
 */
export const validateMinLength =
  (minLength: number, field: string) => (value: string | undefined): string | null | undefined => {
    if (value === undefined || value.trim() === '') {
      return undefined;
    }
    
    if (value.trim().length < minLength) {
      const pluralSuffix = minLength > 1 ? 's' : '';
      return `${field} must have at least ${minLength} letter${pluralSuffix}. Please try again.`;
    }
    return null;
  };

const validateEmailFormat = (value: string | undefined): string | null => {
  if (value === undefined) return null;

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.|_\-)?[^<>()\[\]\\.,;:\s@"]*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !emailRegex.test(value)
    ? 'Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again'
    : null;
};

export const validateEmail = (value: string | undefined): string | null => {
  return validateMinLength(3, 'Email')(value) || validateEmailFormat(value);
};

const validateNameFormat = (value: string | undefined): string | null  => {
  if (value === undefined) return null;

  const allowedChars = new RegExp(`^[${ALLOWED_NAME_CHARS}]+$`);

  return !allowedChars.test(value)
    ? 'First name can only contain letters(A-Za-z), numbers(0-9), spaces( ), periods(.), underscores (_), and apostrophes (&). Please remove special characters and try again.'
    : null;
};

export const validateName = (value: string | undefined): string | null  => {
  return validateMinLength(1, 'Name')(value) || validateNameFormat(value);
};
