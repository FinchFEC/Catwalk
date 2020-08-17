const defaultImages = [
  {
    data: {
      product_id: "4",
      results: [
        {
          style_id: 17,
          name: "Black",
          original_price: "65",
          sale_price: "0",
          "default?": 1,
          photos: [
            {
              thumbnail_url:
                "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
              url:
                "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
            },
          ],
        },
      ],
    },
  },
];

function relatedImages(state = defaultImages, action) {
  switch (action.type) {
    case "GET_RELATED_IMAGES":
      return action.data;
    default:
      return state;
  }
}

export default relatedImages;
