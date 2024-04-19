import { Timestamp, FieldValue } from 'firebase/firestore';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId: string;
}

export interface UserData {
  name: string;
  email: string;
  interests: string[];
  source: string;
  features: string[];
  createdAt: Timestamp | FieldValue;
}
