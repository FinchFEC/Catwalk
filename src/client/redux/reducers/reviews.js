function reviews(state = [], action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      console.log('action.data', action.data);
      return [...state, ...action.data];
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return [];
    default:
      return state;
  }
}

export default reviews;
