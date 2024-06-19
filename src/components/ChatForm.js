import React, { useState } from 'react';

const ChatForm = ({ addChat }) => {
  const [chat, setChat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chat.trim() === '') return;
    addChat(chat);
    setChat('');
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input
        type="text"
        placeholder="Enter"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
      />
      <button type="submit">送信</button>
    </form>
  );
};

export default ChatForm;