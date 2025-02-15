import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/main.scss';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);