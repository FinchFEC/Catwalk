import intialState from "./initialStyles.js";

function styles(state = intialState, action) {
  switch (action.type) {
    case "GET_STYLES":
      return action.data;
    default:
      return state;
  }
}

export default styles;
