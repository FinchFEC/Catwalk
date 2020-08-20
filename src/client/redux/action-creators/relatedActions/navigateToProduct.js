const navigateToProduct = (productId) => {
  console.log('triggered navigate to product action-creator');
  console.log(productId);
  return {
    type: 'CHANGE_PRODUCT_ID',
    data: productId
  };
};

export default navigateToProduct;
