// holds Star Rating, Product Category, Product Title, Price
import React from "react";
import "../../../assets/scss/overview.scss";

const ProductInformation = () => {
  return (
    <div className="information-holder">
      <div className="rating"></div>
      <div className="product-category"></div>
      <div className="product-title"></div>
      <div className="product-price"></div>
    </div>
  );
};

export default ProductInformation;
