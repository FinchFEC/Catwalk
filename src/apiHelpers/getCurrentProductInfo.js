import axios from "axios";

function getCurrentProductInfo(productId) {
  return axios
    .get(`http://18.224.37.110/products/${productId}`)
    .then(({data}) => {
      return data;
    })
    .catch((err) => console.error(err));
}

export default getCurrentProductInfo;
