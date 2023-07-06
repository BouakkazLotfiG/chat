import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyArRQcqklUoPhXUR3NWMNWfgn4dIyCYQOQ',
  authDomain: 'chat-cc87d.firebaseapp.com',
  projectId: 'chat-cc87d',
  storageBucket: 'chat-cc87d.appspot.com',
  messagingSenderId: '117948987889',
  appId: '1:117948987889:web:4208489f9e94800ed92c50',
  measurementId: 'G-Q9LVCQXX1W',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
