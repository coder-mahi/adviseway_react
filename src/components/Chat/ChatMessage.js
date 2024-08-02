// src/components/Chat/ChatMessage.js
import React from 'react';
import './ChatMessage.css'; // Import the CSS file for styling

function ChatMessage({ text }) {
  return (
    <div className="chat-message">
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
