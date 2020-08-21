import getReviewMetadata from '../../../apiHelpers/getReviewMetadata';

export default function getReviewMetadataThunk() {
  return (dispatch, getState) => {
    getReviewMetadata(getState().productId).then((data) => {
      // console.log('get review metadata:', data.data);
      dispatch({ type: 'GET_REVIEW_RATINGS', ratings: data.data.ratings });
      let ratingsCount = 0; // number of ratings
      let totalRating = 0;
      Object.entries(data.data.ratings).forEach((arr) => {
        ratingsCount += arr[1];
        totalRating += arr[0] * arr[1];
      });
      let avgRating = (totalRating / ratingsCount).toFixed(2);
      if (isNaN(avgRating)) {
        avgRating = 0;
      }
      dispatch({ type: 'GET_AVG_RATING', data: avgRating });
      dispatch({
        type: 'GET_REVIEW_RECOMMENDED',
        recommended: data.data.recommended,
      });
      dispatch({
        type: 'GET_REVIEW_CHARACTERISTICS',
        characteristics: data.data.characteristics,
      });
    });
  };
}
