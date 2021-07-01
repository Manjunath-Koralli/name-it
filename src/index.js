import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// component to render, where to render - div (id of div element)
// write code in jsx and we use create-react-app to transpile into normal js so that browser understands
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// State - piece of data that we might need to save (and that might change later)
// for rendering in future or for performing some actions in future

// object in js is a key value pair


// Props -  a data that we can transfer from a parent component to child component
