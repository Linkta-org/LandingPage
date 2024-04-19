import type { ConfigItem, FormValues, ValidationFunction } from '../types/signupForm';

/**
 * Generates initial form values based on the provided config.
 * @param config - Array of ConfigItem objects.
 * @returns Object with field names as keys and empty strings as values.
 */
export const generateInitialValues = (config: ConfigItem[]): FormValues => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    interests: '',
    source: '',
    features: ''
  };

  config.forEach((item) => {
    initialValues[item.field] = '';
  });

  return initialValues;
};

/**
 * Generates validation rules based on the provided config.
 * @param config - Array of ConfigItem objects.
 * @returns Object with field names as keys and validation functions as values.
 */
export const generateValidationRules = (
  config: ConfigItem[]
): Record<keyof FormValues, ValidationFunction | undefined> => {
  const validationRules: Record<keyof FormValues, ValidationFunction | undefined> = {
    name: undefined,
    email: undefined,
    interests: undefined,
    source: undefined,
    features: undefined
  };

  config.forEach((item) => {
    validationRules[item.field] = item.validate ?? undefined;
  });

  return validationRules;
};

export const ALLOWED_NAME_CHARS = 'a-zA-Z0-9 ._\'';

export const ALLOWED_COMMON_CHARS = 'a-zA-Z0-9 ,.\\-&\\[\\]()';
