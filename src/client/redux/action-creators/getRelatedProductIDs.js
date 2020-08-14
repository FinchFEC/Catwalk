import apiHelpers from '../../../apiHelpers';

function getRelatedProductIDs(productId) {
  return (dispatch) => {
    return apiHelpers
      .getRelatedProductIDs(productId)
      .then((data) => {
        dispatch({ type: 'GET_RELATED_IDS', data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default getRelatedProductIDs;
