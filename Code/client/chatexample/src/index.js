import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const container = document.querySelector('#coconutt-chat-widget');

ReactDOM.render(
  <App />,
  document.getElementById('root')||container
);
console.log(`You are using ${React.version} version of React and not ${window.React.version} which is the global one.`);
