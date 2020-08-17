// holds Star Rating, Product Category, Product Title, Price
import React from "react";
import "../../../assets/scss/overview.scss";
import { AiFillStar } from "react-icons/ai";
import StyleSelector from "./StyleSelector.js";
import AddToCart from "./AddToCart.js";

const ProductInformation = () => {
  return (
    <div className="product-information">
      <div className="information-holder">
        <div className="rating">
          <AiFillStar /> 
          {' '}
          <AiFillStar /> 
          {' '}
          <AiFillStar /> 
          {' '}
          <AiFillStar />
          {" "}
          <AiFillStar /> 
          {' '}
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
