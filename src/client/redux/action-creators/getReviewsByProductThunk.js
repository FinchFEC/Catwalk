import apiHelpers from '../../../apiHelpers';

function getReviewsByProductThunk(productId) {
  console.log(productId);
  return (dispatch) => {
    return apiHelpers
      .getReviewsByProduct(productId)
      .then((data) => {
        dispatch({ type: 'GET_REVIEWS', data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default getReviewsByProductThunk;
