import apiHelpers from '../../../../apiHelpers';

function getRelatedProductsInfo(productId) {
  return (dispatch) => {
    return apiHelpers
      .getRelatedProductsInfo(productId)
      .then((data) => {
        dispatch({ type: 'GET_RELATED_INFO', data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default getRelatedProductsInfo;
