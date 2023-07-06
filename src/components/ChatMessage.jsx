import React from 'react';
import { auth } from '../firebase';

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  console.log('text:', text);
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='avatar' />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
