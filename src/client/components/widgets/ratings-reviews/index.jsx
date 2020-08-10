import ReactDOM from 'react-dom';
import React from 'react';
import RatingsReviews from './ratings-reviews';
import RatingsReviewsContainer from '../../../redux/containers/ratingsReviewsContainer.js';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

ReactDOM.render(
  <Provider store={store}>
    <RatingsReviewsContainer />
  </Provider>,
  document.getElementById('app')
);
