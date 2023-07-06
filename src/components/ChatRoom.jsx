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
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
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
    <div className=''>
      <div className='p-4 text-sm md:text-md h-[30rem] overflow-y-scroll'>
        {messages ? (
          messages?.docs?.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        ) : (
          <h1>no messages yet</h1>
        )}
        <div ref={position}></div>
      </div>

      <div className=' p-4 shadow-lg'>
        <form className='flex justify-between gap-4' onSubmit={submitMessage}>
          <input
            className='w-full p-2  rounded-lg '
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='Type a message...'
          />
          <button
            className='bg-[#457B9D] hover:bg-gray-400 hover:shadow-lg transition ease-in-out duration-150 text-[#F1FAEE] font-semi-bold py-1 px-4 rounded-lg inline-flex items-center gap-2'
            type='submit'
          >
            <span>send</span>
            <PaperAirplaneIcon className='w-5 h-5 ' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
