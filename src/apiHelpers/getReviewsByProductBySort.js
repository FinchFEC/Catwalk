import axios from 'axios';

function getReviewByProductBySort(productId, sort, count) {
  return axios
    .get(
      `http://18.224.37.110/reviews/?product_id=${productId}&sort=${sort}&count=${count}&page=1`
    )
    .then((data) => {
      return data.data.results;
    })
    .catch((err) => {
      console.log('error getting reviews by product by sort');
      console.log(err);
    });
}

export default getReviewByProductBySort;
