// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'smart-agency-f2a5a.firebaseapp.com',
  projectId: 'smart-agency-f2a5a',
  storageBucket: 'smart-agency-f2a5a.appspot.com',
  messagingSenderId: '27738446024',
  appId: '1:27738446024:web:76a942ccfa90d374dd6dfd',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
