function reviewsBuffer(state = [], action) {
  switch (action.type) {
    case 'MOVE_TO_BUFFER':
      return [...state, ...action.data];
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return [];
    case 'GET_REVIEW_BY_SORT':
      return [...action.data];
    default:
      return state;
  }
}

export default reviewsBuffer;
