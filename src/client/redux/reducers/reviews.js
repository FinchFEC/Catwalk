function reviews(state = [], action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return [...state, ...action.data];
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return [];
    default:
      return state;
  }
}

export default reviews;
