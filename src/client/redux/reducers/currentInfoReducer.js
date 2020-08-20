function currentInfo(state = {}, action) {
  switch (action.type) {
    case "GET_CURRENT_INFO":
      return action.data;
    default:
      return state;
  }
}

export default currentInfo;
