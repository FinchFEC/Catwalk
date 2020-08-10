import { combineReducers } from 'redux';
// import individual reducers here;
import productList from './productList.js';
import reviewCharacteristics from './reviewCharacteristics';
import reviewRatings from './reviewRatings';
import reviewRecommended from './reviewRecommended';

const rootReducer = combineReducers({
  productList,
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
});

export default rootReducer;
