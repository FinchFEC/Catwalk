import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import RatingsReviewsContainer from '../../../redux/containers/RatingsReviewsContainer.js';

ReactDOM.render(
  <Provider store={store}>
    <RatingsReviewsContainer />
  </Provider>,
  document.getElementById('app')
);
