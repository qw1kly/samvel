import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { findAllByAltText } from '@testing-library/dom';


setTimeout(() => {
document.body.style.overflow = "auto";
document.body.style.overflowY = "auto";
}, 2000);

setTimeout(() => {
let ss =  document.createElement("div")
  ss.id = "html_element"
  document.body.appendChild(ss)
}, 500);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

