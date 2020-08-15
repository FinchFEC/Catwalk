const defaultState = [
  {
    data: {
      id: 1,
      deafault_price: 25,
      name: "Hat 1",
      category: "Hat",
      slogan: "Fake slogan 1.",
    },
  },
];

function relatedReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_RELATED_INFO":
      return action.data;
    default:
      return state;
  }
}

export default relatedReducer;
