import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// here we will import our Counter component
import Counter from './components/counter'

// here we are importing bootstrap into our app
import 'bootstrap/dist/css/bootstrap.css';

// now we render our Counter component here like this (following line)
// ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
