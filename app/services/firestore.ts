import {
  type CollectionReference,
  collection,
  addDoc,
} from 'firebase/firestore';
import type { userDataSanitization } from '../schemas/userDataSanitizationSchema';
import { db } from '../config/firebase';

/**
 * Create user data in Firestore without reading into DB.

 * @param {userDataSanitization} userData - The sanitized user data to be stored.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
export const createUserDoc = async (
  userData: userDataSanitization
): Promise<void> => {
  const usersRef: CollectionReference = collection(db, 'users');
  try {
    await addDoc(usersRef, userData);
  } catch (error) {
    console.log('Failed to store user data');
  }
};
