import apiHelpers from '../../../apiHelpers';

function getReviewsByProductThunk() {
  return (dispatch, getState) => {
    const { productId, page, sort, reviewsBuffer } = getState();
    if (page === 1) {
      return apiHelpers
        .getReviewsByProduct(productId, page, sort)
        .then((data) => {
          dispatch({ type: 'MOVE_TO_BUFFER', data });
          dispatch({ type: 'INCREASE_PAGE' });
          return apiHelpers
            .getReviewsByProduct(productId, page + 1, sort)
            .then((data2) => {
              console.log('data2:', data2);
              dispatch({ type: 'GET_REVIEWS', data: data2 });
              dispatch({ type: 'INCREASE_PAGE' });
            });
        });
    }
    return apiHelpers
      .getReviewsByProduct(productId, page, sort)
      .then((data) => {
        dispatch({ type: 'MOVE_TO_BUFFER', data: reviewsBuffer });
        dispatch({ type: 'GET_REVIEWS', data });
        dispatch({ type: 'INCREASE_PAGE' });
      });
  };
}

export default getReviewsByProductThunk;
