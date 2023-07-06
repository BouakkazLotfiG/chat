import { collection } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const [messages] = useCollectionData(collection(db, 'message'), {
    idField: 'id',
  });
  console.log('messages:', messages);
  return (
    <>
      <div>
        {messages === true && messages.length === 0 ? (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        ) : (
          <h1>no messages yet</h1>
        )}
      </div>
    </>
  );
};

export default ChatRoom;
