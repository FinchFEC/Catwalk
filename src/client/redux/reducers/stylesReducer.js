function styles(state = [], action) {
  switch (action.type) {
    case "GET_STYLES":
      return action.data;
    default:
      return state;
  }
}

export default styles;
