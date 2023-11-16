import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore } from 'firebase/firestore'
import {getStorage, getStream} from 'firebase/storage'

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SOTRAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_ID,
  appId: import.meta.env.VITE_APP_ID,
};



// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app);
export const storage = getStorage(app)