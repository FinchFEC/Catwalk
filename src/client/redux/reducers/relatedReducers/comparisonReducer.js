function comparison(state = false, action) {
  console.log('comparison reducer triggered');
  switch (action.type) {
    case "TOGGLE_COMPARISON":
      return !state;
    default:
      return state;
  }
}

export default comparison;