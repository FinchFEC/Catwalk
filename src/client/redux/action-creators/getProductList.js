import getProducts from '../../../apiHelpers/getProducts.js';

const getProductList = () => (dispatch) => {
  getProducts(dispatch);
};

export default getProductList;
