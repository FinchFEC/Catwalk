import axios from 'axios';

function getRelatedProductIDs(productId) {
  return axios
    .get(`/products/${productId}/related`)
    .then((data) => {
      return data.data.results;
    });
}

export default getRelatedProductIDs;
