import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './assets/scss/styles.scss';
import store from './redux/store';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App name="Jane" />
  </Provider>,
  mountNode,
);
