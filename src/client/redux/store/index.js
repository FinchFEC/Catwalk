import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = Redux.createStore(rootReducer);

export default store;
