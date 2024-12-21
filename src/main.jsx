import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure App.jsx exists in the same folder
import './index.css'; // Optional: If you use global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
