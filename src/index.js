import React from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheets/ie.css';
import './styles/stylesheets/screen.css';
import './styles/stylesheets/print.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
