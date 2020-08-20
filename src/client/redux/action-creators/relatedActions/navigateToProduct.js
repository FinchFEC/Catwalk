const navigateToProduct = (productId) => {
  return {
    type: 'CHANGE_PRODUCT_ID',
    data: productId
  };
};

export default navigateToProduct;
