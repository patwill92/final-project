import React from 'react';
import ReactDOM from 'react-dom';
import './fontawesome/light'
import './fontawesome/regular'
import './fontawesome/solid'
import './fontawesome/brands'
import './fontawesome/fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
