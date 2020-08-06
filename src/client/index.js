import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import './assets/scss/styles.scss';
import store from './redux/store';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App name='Jane' />
  </Provider>,
  mountNode
);
