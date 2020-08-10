import { combineReducers } from 'redux';

// import individual reducers here;
import productList from './productList.js';
import reviewCharacteristics from './reviewCharacteristics';
import reviewRatings from './reviewRatings';
import reviewRecommended from './reviewRecommended';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  productList,
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
  reviews: reviewsReducer,
});

export default rootReducer;
