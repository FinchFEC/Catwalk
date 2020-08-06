var productList = (data) => {
  return {
    products: data,
    type: "GET_PRODUCT_LIST",
  };
};

export default productList;
