// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProfileProvider } from './context/ProfileContext'; // Import ProfileProvider

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
