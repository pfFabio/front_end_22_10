import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App , DisplayNome} from './App';
import Feliz from './feliz';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayNome nome="Fábio"/>
    <Feliz />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
