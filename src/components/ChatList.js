import React from 'react';

const ChatList = ({ chats }) => {
  return (
    <ul className="chat-list">
      {chats.map((chat, index) => (
        <li key={index}>{chat}</li>
      ))}
    </ul>
  );
};

export default ChatList;