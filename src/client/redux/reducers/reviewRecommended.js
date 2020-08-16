export default function reviewRecommended(state = {}, action) {
  switch (action.type) {
    case 'GET_REVIEW_RECOMMENDED':
      return action.recommended;
    default:
      return state;
  }
}
