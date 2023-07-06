import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const [formValue, setFormValue] = useState('');
  const [messages] = useCollectionData(collection(db, 'message'), {
    idField: 'id',
  });
  console.log('messages:', messages);

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
  };

  return (
    <>
      <div>
        <div>
          {messages === true && messages.length === 0 ? (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          ) : (
            <h1>no messages yet</h1>
          )}
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
