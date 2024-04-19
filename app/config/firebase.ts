import { initializeApp } from 'firebase/app';
import {
  type Auth,
  type User,
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import type { FirebaseConfig } from '../types/firebase';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";  

interface ReloadUser {
 screenName: string
}

interface ExtendedUser extends User {
  reloadUserInfo?: ReloadUser;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!, 
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId ||
  !firebaseConfig.appId
) {
  throw new Error(
    'Firebase configuration error: Missing essential configuration values'
  );
}
//initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const auth: Auth = getAuth(firebaseApp); //initialize Firebase Authentication service
auth.useDeviceLanguage(); //detecting/using user perferrd languague on their devices
export const db = getFirestore(firebaseApp); //initialize Firestore service

const googleProvider = new GoogleAuthProvider();
const ghProvider = new GithubAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signUpWithGoogle = () => signInWithRedirect(auth, googleProvider);
export const signUpWithGitHub = () => signInWithRedirect(auth, ghProvider);


export const createUserDoc = async (userAuth: ExtendedUser) => {
  // when using createUserDoc, user email must be available on userAuth object
  if (!userAuth.email) {
    console.error('User email address not found')
    return {
      userDocRef: null,
      status: 'error',
    }
  }
  const userDocRef = doc(db, 'users', userAuth.email as string);  //create a User Document reference

  const userSnapShot = await getDoc(userDocRef); //using DocRef to checking if the document already exists in the db

  //if user data does not exists
  if (!userSnapShot.exists()) {
    let name = userAuth.displayName || userAuth.reloadUserInfo?.screenName
    const { email } = userAuth;
    const createdAt = new Date();
    //create/set document with the data from userAuth in the users collection
    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt
      });
    } catch (error) {
      console.log('An error occurred during account creation.');
    }
  }

  // if user data exists
  return {
    userDocRef: userDocRef,
    status: 'ok',
  };
};


