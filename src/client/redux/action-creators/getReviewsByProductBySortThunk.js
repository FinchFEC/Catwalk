import getReviewByProductBySort from '../../../apiHelpers/getReviewsByProductBySort';

function getReviewByProductBySortThunk() {
  return function (dispatch, getState) {
    const { sort, productId } = getState();
    getReviewByProductBySort(productId, sort, 30).then((data) => {
      dispatch({ type: 'GET_REVIEW_BY_SORT', data });
      dispatch({ type: 'NO_MORE_REVIEWS' });
    });
  };
}

export default getReviewByProductBySortThunk;
