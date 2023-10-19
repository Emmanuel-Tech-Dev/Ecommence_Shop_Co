import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SOTRAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_ID,
  appId: import.meta.env.VITE_APP_ID,
};

console.log(import.meta.env.VITE_API_KEY)

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
