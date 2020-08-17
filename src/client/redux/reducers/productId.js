function productId(state = 1, action) {
  switch (action.type) {
    case 'CHANGE_PRODUCT_ID':
      return action.data;
    default:
      return state;
  }
}

export default productId;
