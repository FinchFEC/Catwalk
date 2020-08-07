import getProducts from '../../../apiHelpers/getProducts.js';

<<<<<<< HEAD
const getProductList = () => (dispatch) => {
  getProducts(dispatch);
=======
const getProductList = () => {
  return (dispatch) => {
    return getProducts(dispatch);
  };
>>>>>>> master
};

export default getProductList;
