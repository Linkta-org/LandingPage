import { serverTimestamp } from 'firebase/firestore';
import { FormValues } from '../types/signupForm';
import {
  ALLOWED_NAME_CHARS,
  ALLOWED_COMMON_CHARS,
} from './formInitialization';

export const removeEmptyItems = (array: string[]): string[] => {
  return array.length ? array.filter((item) => item.length > 0) : [];
};

export const removeSpecialCharacters = (
  text: string,
  allowedChars: string
): string => {
  const allowedCharsRegex = new RegExp(`[^${allowedChars}]`, 'g');
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
    name: removeSpecialCharacters(formData.name, ALLOWED_NAME_CHARS),
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
