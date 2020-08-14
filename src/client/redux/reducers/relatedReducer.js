function relatedReducer(state = [], action) {
  switch (action.type) {
    case 'GET_RELATED_IDS':
      return action.data;
    default:
      return state;
  }
}

export default relatedReducer;
