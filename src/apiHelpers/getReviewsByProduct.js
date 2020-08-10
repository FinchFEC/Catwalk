import axios from 'axios';

function getReviewsByProduct(productId) {
  return axios
    .get(`http://18.224.200.47/reviews/${productId}/list`)
    .then((data) => {
      return data.data.results;
    });
}

export default getReviewsByProduct;
