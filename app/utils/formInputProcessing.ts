import { serverTimestamp } from "firebase/firestore";
import { FormValues } from "../types/signupForm";

export const removeEmptyItems = (array: string[]): string[] => {
    return array.length ? array.filter(item => item.length > 0) :[];
};

export const parseAndCleanInput = (input: string | null | undefined): string[] => {
    const parsedInput = input ? input.split(',') : [];
    return removeEmptyItems(parsedInput.map(item => item.trim()));
};

export const cleanUserData = (formData: FormValues) => {
  return {
    name: formData.name.trim(),
    email: formData.email,
    interests: parseAndCleanInput(formData.interests),
    source: formData.source ? formData.source.trim() : 'not provided',
    features: parseAndCleanInput(formData.features),
    createdAt: serverTimestamp(),
  };
};
