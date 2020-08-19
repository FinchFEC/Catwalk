import apiHelpers from '../../../apiHelpers';

function getReviewsByProductThunk() {
  return (dispatch, getState) => {
    const { productId, page, sort, reviewsBuffer } = getState();
    return apiHelpers
      .getReviewsByProduct(productId, page, sort)
      .then((data) => {
        dispatch({ type: 'MOVE_TO_BUFFER', data: reviewsBuffer });
        dispatch({ type: 'GET_REVIEWS', data });
        if (page === 1) {
          dispatch({ type: 'MOVE_TO_BUFFER', data });
        }
        dispatch({ type: 'INCREASE_PAGE' });
        if (data.length < 2) {
          dispatch({ type: 'NO_MORE_REVIEWS' });
        } else {
          apiHelpers
            .getReviewsByProduct(productId, page + 1, sort)
            .then((data2) => {
              dispatch({ type: 'GET_REVIEWS', data: data2 });
              if (data.length < 2) {
                dispatch({ type: 'NO_MORE_REVIEWS' });
              }
            });
        }
      });
  };
}

export default getReviewsByProductThunk;
