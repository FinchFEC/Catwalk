function reviewsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return action.data;
    default:
      return state;
  }
}

export default reviewsReducer;
