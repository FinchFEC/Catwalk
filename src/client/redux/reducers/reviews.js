function reviews(state = [], action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return action.data;
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
    case 'MOVE_TO_BUFFER':
      return [];
    default:
      return state;
  }
}

export default reviews;
