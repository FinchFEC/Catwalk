import axios from 'axios';

const data = [
  {
    review_id: 5,
    rating: 3,
    summary:
      "I'm enjoying wearing these shadesYUPYUPYUPYUPYUPYUPYUPYUPYUPYUPYUPYUPYUP",
    recommend: 1,
    response: '',
    body: 'Comfortable and practical.',
    date: '2019-04-14T00:00:00.000Z',
    reviewer_name: 'shortandsweeet',
    helpfulness: 5,
    photos: [
      {
        id: 1,
        url: 'urlplaceholder/review_5_photo_number_1.jpg',
      },
      {
        id: 2,
        url: 'urlplaceholder/review_5_photo_number_2.jpg',
      },
      // ...
    ],
  },
  {
    review_id: 3,
    rating: 4,
    summary: 'I am liking these glasses',
    recommend: 0,
    response: "Glad you're enjoying the product!",
    body: "They are very dark. But that's good because I'm in very sunny spots",
    date: '2019-06-23T00:00:00.000Z',
    reviewer_name: 'bigbrotherbenjamin',
    helpfulness: 3,
    photos: [],
  },
];

function getReviewsByProduct(productId, page, sort) {
  return axios
    .get(
      `http://18.224.200.47/reviews/${productId}/list?page=${page}&sort=${sort}&count=2`
    )
    .catch((err) => {
      console.log('error getting product reviews');
    })
    .then(() => {
      return data;
    });
}

export default getReviewsByProduct;
