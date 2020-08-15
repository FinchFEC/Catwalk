import axios from "axios";

function getRelatedProductsInfo(productId) {
  return axios
    .get(`http://18.224.200.47/products/${productId}/related`)
    .then(({ data }) => {
      const arrOfUrls = [];
      data.forEach((id) => {
        arrOfUrls.push(`http://18.224.200.47/products/${id}`);
      });
      return Promise.all(arrOfUrls.map((url) => axios.get(url)));
      // const promiseArray = arrOfUrls.map((url) => axios.get(url));
      // console.log('---promiseArray: ', promiseArray);
      // axios.all(promiseArray);
    })
    .then((results) => {
      console.log('---results of axiosAll: ', results);
      return results;
    })
}

export default getRelatedProductsInfo;
