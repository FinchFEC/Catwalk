import Redux from "redux";

var productList = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT_LIST":
      return action.products;
    default:
      return state;
  }
};

export default productList;
