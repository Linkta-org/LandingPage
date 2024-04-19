import { serverTimestamp } from "firebase/firestore";
import { FormValues } from "../types/signupForm";

export const removeEmptyItems = (array: string[]): string[] => {
    return array.length ? array.filter(item => item.length > 0) :[];
};

export const parseAndCleanInput = (input: string | null | undefined): string[] => {
    const parsedInput = input?.split(',') ?? [];
    return removeEmptyItems(parsedInput.map(item => removeSpecialCharacters(item)));
};

export const removeSpecialCharacters = (text: string): string => {
  const allowedCharsRegex = /[^a-zA-Z0-9 ,.-]/g;
  return text.replace(allowedCharsRegex, '').trim();
};

export const cleanUserData = (formData: FormValues) => {
  return {
    name: removeSpecialCharacters(formData.name),
    email: formData.email.trim().toLowerCase(),
    interests: parseAndCleanInput(formData.interests),
    source: formData.source ? removeSpecialCharacters(formData.source) : 'not provided',
    features: parseAndCleanInput(formData.features),
    createdAt: serverTimestamp(),
  };
};
