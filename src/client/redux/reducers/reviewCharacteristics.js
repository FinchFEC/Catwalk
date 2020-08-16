export default function reviewCharacteristics(state = {}, action) {
  switch (action.type) {
    case 'GET_REVIEW_CHARACTERISTICS':
      return action.characteristics;
    default:
      return state;
  }
}
