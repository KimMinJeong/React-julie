import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AppTest from './components/AppTest';

const rootElement = document.getElementById('root');
const appElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<AppTest />, appElement);
