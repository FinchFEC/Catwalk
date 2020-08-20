function productId(state = 2, action) {
  console.log('action received by reducer :', action)
  switch (action.type) {
    case 'CHANGE_PRODUCT_ID':
      return action.data;
    default:
      return state;
  }
}

export default productId;
