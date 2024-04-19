import { DocumentReference, getDoc, setDoc } from 'firebase/firestore';

export const checkDocumentExists = async (
  docRef: DocumentReference
): Promise<boolean> => {
  try {
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.exists();
  } catch (error) {
    console.error('Failed to check document existence.');
    return false;
  }
};

export const createUserDocument = async (
  docRef: DocumentReference,
  userData: any
): Promise<void> => {
  try {
    await setDoc(docRef, userData);
  } catch (error) {
    console.error('Failed to create user document.');
  }
};
