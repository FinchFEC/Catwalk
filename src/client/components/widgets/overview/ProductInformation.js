// holds Star Rating, Product Category, Product Title, Price
import React from "react";
import "../../../assets/scss/overview.scss";
import { AiFillStar } from "react-icons/ai";
import StyleSelector from "./StyleSelector.js";
import AddToCart from "./AddToCart.js";
import StaticStars from "../ratings-reviews/static-stars.jsx";

const ProductInformation = (props) => {
  return (
    <div className="product-information">
      <div className="information-holder">
        <div className="rating">
          <div className="row">
            <StaticStars rating={3} /> <a href="">Read all reviews</a>
          </div>         
          <a href="">Read all reviews</a>
        </div>
        <div className="product-category">Pants</div>
        <div className="product-title">Morning Joggers </div>
        <div className="product-price"> $40</div>
      </div>
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default ProductInformation;
