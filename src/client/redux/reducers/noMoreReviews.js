function noMoreReviews(state = false, action) {
  switch (action.type) {
    case 'NO_MORE_REVIEWS':
      return true;
    default:
      return state;
  }
}

export default noMoreReviews;
