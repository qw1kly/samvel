import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { findAllByAltText } from '@testing-library/dom';


setTimeout(() => {
document.body.style.overflow = "auto";
document.body.style.overflowY = "auto";
}, 2000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

