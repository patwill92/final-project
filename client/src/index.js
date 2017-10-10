import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './fontawesome/light'
import './fontawesome/regular'
import './fontawesome/solid'
import './fontawesome/brands'
import './fontawesome/fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import store from './store';
import App from './App';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
