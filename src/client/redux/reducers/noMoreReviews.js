function noMoreReviews(state = false, action) {
  switch (action.type) {
    case 'NO_MORE_REVIEWS':
      return true;
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return false;
    default:
      return state;
  }
}

export default noMoreReviews;
