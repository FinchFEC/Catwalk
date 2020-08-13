import apiHelpers from '../../../apiHelpers';

function getReviewsByProductThunk() {
  return (dispatch, getState) => {
    const { productId, page, sort } = getState();
    return apiHelpers
      .getReviewsByProduct(productId, page, sort)
      .then((data) => {
        dispatch({ type: 'GET_REVIEWS', data });
        dispatch({ type: 'INCREASE_PAGE' });
        if (data.length < 2) {
          dispatch({ type: 'NO_MORE_REVIEWS' });
        }
      });
  };
}

export default getReviewsByProductThunk;
