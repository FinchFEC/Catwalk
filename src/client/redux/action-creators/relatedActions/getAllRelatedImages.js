import apiHelpers from '../../../../apiHelpers';

function getAllRelatedImages(productId) {
  return (dispatch) => {
    return apiHelpers
      .getAllRelatedImages(productId)
      .then((data) => {
        dispatch({ type: 'GET_RELATED_IMAGES', data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default getAllRelatedImages;
