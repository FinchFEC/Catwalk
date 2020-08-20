const defaultReviews = [
  {
    data: {
      product: "5",
      page: 0,
      count: 5,
      results: [
        {
          review_id: 11,
          rating: 4,
        },
        {
          review_id: 12,
          rating: 3,
        },
      ],
    },
  },
];

function relatedReviews(state = defaultReviews, action) {
  switch (action.type) {
    case "GET_RELATED_RATINGS":
      return action.data;
    default:
      return state;
  }
}

export default relatedReviews;
