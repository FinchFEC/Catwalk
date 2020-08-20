function avgRating(state = 0, action) {
  switch (action.type) {
    case 'GET_AVG_RATING':
      return action.data;
    default:
      return state;
  }
}

export default avgRating;
