function sort(state = 'relevant', action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      return action.data;
    default:
      return state;
  }
}

export default sort;
