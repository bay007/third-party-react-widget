import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const container = document.querySelector('#coconutt-chat-widget');

ReactDOM.render(
  <App />,
  document.getElementById('root')||container
);

