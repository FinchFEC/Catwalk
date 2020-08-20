import axios from "axios";
import productList from "../client/redux/action-creators/productList.js";

const getProducts = (callback) => {
  axios
    .get("http://18.224.37.110/products/list")
    .then((data) => {
      console.log(data);
      if (callback) {
        callback(productList(data));
      }
    })
    .catch((err) => {
      console.log("error getting products", err);
    });
};

export default getProducts;
