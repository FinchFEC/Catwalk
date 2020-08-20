import { combineReducers } from 'redux';

// import individual reducers here:
import productList from './productList.js';
import reviewCharacteristics from './reviewCharacteristics';
import reviewRatings from './reviewRatings';
import reviewRecommended from './reviewRecommended';
import reviews from './reviews';
import sort from './sort';
import page from './page';
import productId from './productId';
import reviewsBuffer from './reviewsBuffer';
import relatedInfo from './relatedReducers/relatedInfoReducer';
import relatedImages from './relatedReducers/relatedImagesReducer';
import comparison from './relatedReducers/comparisonReducer';
import currentInfo from './currentInfoReducer';
import styles from './stylesReducer';
import relatedRatings from './relatedReducers/relatedRatingsReducer';
import avgRating from './avgRating';

const rootReducer = combineReducers({
  avgRating,
  productList,
  productId,
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
  reviews: reviewsBuffer,
  reviewsBuffer: reviews,
  sort,
  page,
  relatedInfo,
  relatedImages,
  showComparison: comparison,
  currentInfo,
  styles,
  relatedRatings,
});

export default rootReducer;
