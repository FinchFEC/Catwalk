import axios from "axios";
//const axios = require("axios");

function getStyles(productId) {
  return axios
    .get(`http://18.224.37.110/products/${productId}/styles`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.error(err));
}

export default getStyles;
