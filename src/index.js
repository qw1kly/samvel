import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { findAllByAltText } from '@testing-library/dom';

document.body.style.overflow = "auto";
document.body.style.overflowY = "auto";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

