import axios from 'axios';

function getReviewsByProduct(productId, page, sort) {
  return axios
    .get(
      `http://18.224.200.47/reviews/${productId}/list?page=${page}&sort=${sort}&count=2`
    )
    .catch((err) => {
      console.log('error getting product reviews');
    })
    .then((data) => {
      return data.data.results;
    });
}

export default getReviewsByProduct;
