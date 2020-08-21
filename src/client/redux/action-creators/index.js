// import individual action creators
import getProductList from "./getProductList.js";
import getRelatedProductsInfo from "./relatedActions/getRelatedProductsInfo.js";
import getAllRelatedImages from "./relatedActions/getAllRelatedImages.js";
import toggleComparison from "./relatedActions/toggleComparison";
import getCurrentProductInfo from "./getCurrentProductInfo";
import getStylesByProductId from "./getStylesByProductId";
import getAllRelatedReviews from "./relatedActions/getAllRelatedReviews";
import navigateToProduct from "./relatedActions/navigateToProduct";

const actionCreators = {
  getProductList,
  getRelatedProductsInfo,
  getAllRelatedImages,
  toggleComparison,
  getCurrentProductInfo,
  getStylesByProductId,
  getAllRelatedReviews,
  navigateToProduct,
};

export default actionCreators;
