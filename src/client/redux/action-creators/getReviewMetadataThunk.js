import getReviewMetadata from '../../../apiHelpers/getReviewMetadata';

export default function getReviewMetadataThunk() {
  return (dispatch, getState) => {
    dispatch({
      type: 'GET_REVIEW_RATINGS',
      ratings: {
        2: 1,
        3: 1,
        4: 2,
      },
    });
    dispatch({
      type: 'GET_REVIEW_RECOMMENDED',
      recommended: { 0: 2, 1: 2 },
    });
    dispatch({
      type: 'GET_REVIEW_CHARACTERISTICS',
      characteristics: {
        Size: {
          id: 14,
          value: '4.0000',
        },
        Width: {
          id: 15,
          value: '3.5000',
        },
        Comfort: {
          id: 16,
          value: '4.0000',
        },
      },
    });
  };
}
