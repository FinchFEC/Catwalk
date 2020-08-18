function reviewsBuffer(state = [], action) {
  switch (action.type) {
    case 'MOVE_TO_BUFFER':
      return [...state, ...action.data];
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return [];
    default:
      return state;
  }
}

export default reviewsBuffer;
