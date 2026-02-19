import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2SuBPW0ER1KFk0HyfRXNnDq83p5CzW34',
  authDomain: 'devcursorn.firebaseapp.com',
  projectId: 'devcursorn',
  storageBucket: 'devcursorn.firebasestorage.app',
  messagingSenderId: '121519879340',
  appId: '1:121519879340:web:8a0cfb9d760082e2d71b09',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
