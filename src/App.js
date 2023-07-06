import './App.css';
import 'firebase/firestore';
import 'firebase/auth';

import { auth } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
        <h1>⚛️🔥💬</h1>
        {auth.currentUser && (
          <button onClick={() => auth.signOut()}>Sign Out</button>
        )}
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
