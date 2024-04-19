import { DocumentReference, getDoc, setDoc } from 'firebase/firestore';
import { UserData } from '../types/firebase';
/**
 * Asynchronously checks the existence of a Firestore document.
 *
 * @param {DocumentReference} docRef - Reference to the Firestore document.
 * @returns {Promise<boolean>} True if the document exists, false otherwise or if an error occurs.
 */
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

/**
 * Creates or updates a user document in Firestore with the provided data.
 *
 * @param {DocumentReference} docRef - Reference to where the user data should be stored.
 * @param {UserData} userData - The user data to store, conforming to the UserData interface.
 * @returns {Promise<void>} Resolves on successful write, logs error on failure.
 */
export const createUserDocument = async (
  docRef: DocumentReference,
  userData: UserData
): Promise<void> => {
  try {
    await setDoc(docRef, userData);
  } catch (error) {
    console.error('Failed to create user document.');
  }
};
