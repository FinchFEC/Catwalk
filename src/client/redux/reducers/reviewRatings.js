export default function reviewRatings(state = {}, action) {
  switch (action.type) {
    case 'GET_REVIEW_RATINGS':
      return action.ratings;
    default:
      return state;
  }
}
