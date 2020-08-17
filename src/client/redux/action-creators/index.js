// import individual action creators
import getProductList from './getProductList.js';
import getRelatedProductsInfo from './relatedActions/getRelatedProductsInfo.js';
import getAllRelatedImages from './relatedActions/getAllRelatedImages.js';
import toggleComparison from './relatedActions/toggleComparison';


const actionCreators = {
  getProductList,
  getRelatedProductsInfo,
  getAllRelatedImages,
  toggleComparison
};

export default actionCreators;
