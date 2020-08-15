import axios from 'axios';

export default function getReviewMetadata(productId) {
  return axios
    .get(`http://18.224.200.47/reviews/${productId}/meta`)
    .catch((err) => {
      console.log(err);
    });
}
