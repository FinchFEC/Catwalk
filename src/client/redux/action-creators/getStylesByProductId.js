import getStyles from "../../../apiHelpers/getStyles.js";

function getStylesByProductId(productId) {
  return (dispatch) => {
    return getStyles(productId)
      .then((data) => {
        dispatch({ type: "GET_STYLES", data });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default getStylesByProductId;
