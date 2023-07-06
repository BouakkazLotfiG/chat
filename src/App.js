import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyArRQcqklUoPhXUR3NWMNWfgn4dIyCYQOQ',
  authDomain: 'chat-cc87d.firebaseapp.com',
  projectId: 'chat-cc87d',
  storageBucket: 'chat-cc87d.appspot.com',
  messagingSenderId: '117948987889',
  appId: '1:117948987889:web:4208489f9e94800ed92c50',
  measurementId: 'G-Q9LVCQXX1W',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
        <h1>⚛️🔥💬</h1>
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
