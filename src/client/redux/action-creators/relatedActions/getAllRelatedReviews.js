import apiHelpers from '../../../../apiHelpers';

function getAllRelatedReviews(productId) {
  return (dispatch) => {
    return apiHelpers
      .getAllRelatedReviews(productId)
      .then((data) => {
        dispatch({ type: 'GET_RELATED_RATINGS', data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default getAllRelatedReviews;
