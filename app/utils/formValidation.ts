/**
 * Validates if the string meets the minimum length requirement.
 * @param {number} minLength - The minimum number of characters required.
 * @param {string} field - The name of the field to validate.
 * @returns {string|null} An error message if validation fails, otherwise null.
 */
export const validateMinLength =
  (minLength: number, field: string) => (value: string) => {
    if (value.trim().length < minLength) {
      const pluralSuffix = minLength > 1 ? 's' : '';
      return `${field} must have at least ${minLength} letter${pluralSuffix}. Please try again.`;
    }
    return null;
  };

/**
 * Validates the format of an email address.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email format is invalid, otherwise null.
 */
export const validateEmailFormat = (value: string) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !emailRegex.test(value)
    ? 'Invalid email format. Please check for missing "@" or "." symbols, or invalid characters and try again'
    : null;
};

/**
 * Validates an email address for both minimum length and format.
 * @param {string} value - The email address to validate.
 * @returns {string|null} An error message if the email fails either min length or format validation, otherwise null.
 */
export const validateEmail = (value: string) => {
  return validateMinLength(3, 'Email')(value) || validateEmailFormat(value);
};