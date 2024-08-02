// src/components/Chat/Chat.js
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './Chat.css'; // Import the CSS file for styling

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, id: Date.now() }]);
      setNewMessage('');
    }
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map(message => (
          <ChatMessage key={message.id} text={message.text} />
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={handleChange}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
