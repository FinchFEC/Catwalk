import thunk from "redux-thunk";
import getProducts from "../../../apiHelpers/getProducts.js";

const getProductList = () => {
  return (dispatch) => {
    getProducts(dispatch);
  };
};

export default getProductList;
