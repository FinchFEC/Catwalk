import { combineReducers } from 'redux';

// import individual reducers here;
import productList from './productList.js';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
  productList,
  reviews: reviewsReducer,
});

export default rootReducer;
