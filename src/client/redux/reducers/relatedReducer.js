function relatedReducer(state = [{}], action) {
  switch (action.type) {
    case 'GET_RELATED_INFO':
      return action.data;
    default:
      return state;
  }
}

export default relatedReducer;
