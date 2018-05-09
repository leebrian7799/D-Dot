import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

let store = configureStore;
let root = document.getElementById('root');
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<h1>Welcom to DDOT</h1>, root);
});
