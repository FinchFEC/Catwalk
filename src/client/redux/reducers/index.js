import { combineReducers } from "redux";

// import individual reducers here:
import productList from "./productList.js";
import reviewCharacteristics from "./reviewCharacteristics";
import reviewRatings from "./reviewRatings";
import reviewRecommended from "./reviewRecommended";
import reviews from "./reviews";
import noMoreReviews from "./noMoreReviews";
import sort from "./sort";
import page from "./page";
import productId from "./productId";
import reviewsBuffer from "./reviewsBuffer";
import relatedInfo from "./relatedReducers/relatedInfoReducer";
import relatedImages from "./relatedReducers/relatedImagesReducer";
import comparison from "./relatedReducers/comparisonReducer";
import currentInfo from "./currentInfoReducer";
import styles from "./stylesReducer";
import relatedRatings from "./relatedReducers/relatedRatingsReducer";

const rootReducer = combineReducers({
  productList,
  productId,
  reviewCharacteristics,
  reviewRatings,
  reviewRecommended,
  reviews: reviewsBuffer,
  reviewsBuffer: reviews,
  noMoreReviews,
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
