import axios from "axios";

getProducts = (callback) => {
  axios
    .get(`http://18.224.200.47/products/list`)
    .then((data) => {
      console.log(data);
      if (callback) {
        callback(data);
      }
    })
    .catch((err) => {
      console.log("error getting products", err);
    });
};

export default getProducts;
