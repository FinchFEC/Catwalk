import apiHelpers from '../../../apiHelpers';

function getCurrentProductInfo(productId) {
  return (dispatch) => {
    return apiHelpers
      .getCurrentProductInfo(productId)
      .then((data) => {
        dispatch({ type: 'GET_CURRENT_INFO', data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default getCurrentProductInfo;
