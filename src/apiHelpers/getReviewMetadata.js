import axios from 'axios';

export default function getReviewMetadata(productId) {
  return axios
    .get(`http://18.224.37.110/reviews/meta?product_id=${productId}`)
    .catch((err) => {
      console.log('error getting review metadata');
    });
}
