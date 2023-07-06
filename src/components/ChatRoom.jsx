import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useRef, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const [formValue, setFormValue] = useState('');
  const position = useRef();

  //   const query = collection(db, 'message').orderBy('createdAt');
  //   const [messages] = useCollection(query, { idField: 'id' });
  const [messages] = useCollection(
    query(collection(db, 'message'), orderBy('createdAt'))
  );
  console.log(messages?.docs);

  const submitMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'message'), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
    position.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <div>
          {messages ? (
            messages?.docs?.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          ) : (
            <h1>no messages yet</h1>
          )}
          <div ref={position}></div>
        </div>

        <form onSubmit={submitMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type='submit'>send</button>
        </form>
      </div>
    </>
  );
};

export default ChatRoom;
