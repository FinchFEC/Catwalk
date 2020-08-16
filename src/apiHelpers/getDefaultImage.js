import axios from 'axios';

function getDefaultImage(productId) {
  return axios
    .get(`http://18.224.200.47/products/${productId}/styles`)
    .then(({ data }) => {
      return data.results[0].photos[0].url;
    })
    .catch((err) => console.error(err));
}

export default getDefaultImage;