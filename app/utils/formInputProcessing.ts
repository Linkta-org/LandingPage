import { serverTimestamp } from 'firebase/firestore';
import { FormValues } from '../types/signupForm';

const ALLOWED_COMMON_CHARS = '\\p{Letter}0-9 ,.\\-&\\[\\]()';

export const removeEmptyItems = (array: string[]): string[] => {
  return array.length ? array.filter((item) => item.length > 0) : [];
};

export const removeExtraWhiteSpaces = (input: string) => {
  return input.trim().replace(/\s+/g, ' ');
};

export const removeSpecialCharacters = (
  text: string,
  allowedChars: string
): string => {
  const allowedCharsRegex = new RegExp(`[^${allowedChars}]`, 'gu');
  return text.replace(allowedCharsRegex, '').trim();
};

export const parseAndCleanInput = (
  input: string | null | undefined,
  allowedChars: string
): string[] => {
  const parsedInput = input?.split(',') ?? [];
  return removeEmptyItems(
    parsedInput.map((item) => removeSpecialCharacters(item, allowedChars))
  );
};

export const cleanUserData = (formData: FormValues) => {
  return {
    name: removeExtraWhiteSpaces(formData.name),
    email: formData.email.trim().toLowerCase(),
    interests: parseAndCleanInput(
      formData.interests,
      ALLOWED_COMMON_CHARS
    ),
    source: formData.source
      ? removeSpecialCharacters(formData.source, ALLOWED_COMMON_CHARS)
      : 'not provided',
    features: parseAndCleanInput(formData.features, ALLOWED_COMMON_CHARS),
    createdAt: serverTimestamp(),
  };
};
