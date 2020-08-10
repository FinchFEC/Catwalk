import getReviewMetadata from '../../../apiHelpers/getReviewMetadata';

export default function getReviewMetadataThunk(productId) {
  return (dispatch) => {
    getReviewMetadata(productId).then((data) => {
      console.log('data from getReviewMetadata:', data);
      dispatch({ type: 'GET_REVIEW_RATINGS', ratings: data.data.ratings });
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
