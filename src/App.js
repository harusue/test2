import React, { useState, useEffect } from 'react';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';
import './App.css';

const App = () => {
  const [chats, setChats] = useState(
    JSON.parse(localStorage.getItem('chats')) || []);

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  const addChat = (chat) => {
    setChats([...chats, chat]);
  };

  return (
    <div className="app-container">
      <h2>チャットです</h2>
      <ChatForm addChat={addChat} />
      <ChatList chats={chats} />
    </div>
  );
};

export default App;