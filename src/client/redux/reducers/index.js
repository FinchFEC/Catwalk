import { combineReducers } from 'redux';

// import individual reducers here;
import productList from './productList.js';
import reviewCharacteristics from './reviewCharacteristics';
import reviewRatings from './reviewRatings';
import reviewRecommended from './reviewRecommended';
import reviews from './reviews';
import noMoreReviews from './noMoreReviews';
import sort from './sort';
import page from './page';
import productId from './productId';

const rootReducer = combineReducers({
  productList,
  productId,
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
  reviews,
  noMoreReviews,
  sort,
  page,
});

export default rootReducer;
