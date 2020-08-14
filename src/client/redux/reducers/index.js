import { combineReducers } from 'redux';

// import individual reducers here;
import productList from './productList.js';
import reviewsReducer from './reviewsReducer';
import relatedReducer from './relatedReducer';

const rootReducer = combineReducers({
  productList,
  reviews: reviewsReducer,
  related: relatedReducer
});

export default rootReducer;
