import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;
  return <div>{text}</div>;
};

export default ChatMessage;
