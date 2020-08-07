import { combineReducers } from 'redux';
// import individual reducers here;
import productList from './productList.js';

const rootReducer = combineReducers({
  productList,
});

export default rootReducer;
