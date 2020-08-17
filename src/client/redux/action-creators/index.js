// import individual action creators
import getProductList from './getProductList.js';
import getRelatedProductsInfo from './getRelatedProductsInfo.js';
import getAllRelatedImages from './getAllRelatedImages.js';
import toggleComparison from './toggleComparison';


const actionCreators = {
  getProductList,
  getRelatedProductsInfo,
  getAllRelatedImages,
  toggleComparison
};

export default actionCreators;
