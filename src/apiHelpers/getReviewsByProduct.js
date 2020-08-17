import axios from 'axios';

function getReviewsByProduct(productId, page, sort) {
  return axios
    .get(
      `http://18.224.37.110/reviews/?product_id=${productId}&sort=${sort}&count=2&page=${page}`
    )
    .catch((err) => {
      console.log('error getting product reviews');
    })
    .then((data) => {
      return data.data.results;
    });
}

export default getReviewsByProduct;
