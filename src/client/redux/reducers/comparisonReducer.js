function comparison(state = false, action) {
  switch (action.type) {
    case "TOGGLE_COMPARISON":
      return !state;
    default:
      return state;
  }
}

export default comparison;