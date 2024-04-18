import { DocumentReference } from 'firebase/firestore';
import { checkDocumentExists, createUserDocument } from './firestore';

interface UserData {
  name: string;
  email: string;
  interests?: string[];
  source?: string;
  features?: string[];
}

export const processUserData = async (
  userData: UserData,
  userDocRef: DocumentReference,
  onSuccess: () => void,
  onError: (error: any) => void = console.error
): Promise<void> => {
  try {
    const documentExists = await checkDocumentExists(userDocRef);
    if (!documentExists) {
      await createUserDocument(userDocRef, userData);
    }
    onSuccess();
  } catch (error) {
    onError('An error occurred during the user data process:');
  }
};
