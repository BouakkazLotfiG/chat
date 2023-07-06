import React from 'react';
import { auth } from '../firebase';

const ChatMessage = (props) => {
  const message = props.message._document.data.value.mapValue.fields;
  const uid = message.uid.stringValue;
  const photoURL = message.photoURL.stringValue;
  const text = message.text.stringValue;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='avatar' />
      <p className='chat'>{text}</p>
    </div>
  );
};

export default ChatMessage;
