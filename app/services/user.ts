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
  onSuccess: () => void
): Promise<void> => {
  if (!(await checkDocumentExists(userDocRef))) {
    try {
      await createUserDocument(userDocRef, userData);
      onSuccess();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  } else {
    onSuccess();
  }
};
