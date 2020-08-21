// holds Star Rating, Product Category, Product Title, Price
import React from "react";
import "../../../assets/scss/overview.scss";
import StyleSelector from "./StyleSelector.js";
import AddToCart from "./AddToCart.js";
import StaticStars from "../ratings-reviews/static-stars.jsx";

const ProductInformation = ({
  currentInfo,
  avgRating,
  styles,
  currentStyle,
}) => {
  return (
    <div className="product-information">
      <div className="information-holder">
        <div className="rating">
          <div className="row">
            <StaticStars rating={avgRating} />{" "}
            <a href="#reviews">Read all reviews</a>
          </div>
        </div>
        <div className="product-category">{currentInfo.category}</div>
        <div className="product-title">{currentInfo.name}</div>
        <div className="product-price">
          {parseInt(currentStyle.sale_price) > 0 ? (
            <div>
              <span>
                $<del>{currentStyle.original_price}</del>
              </span>
              <span id="sale">
                <strong> ON SALE: ${currentStyle.sale_price}</strong>
              </span>
            </div>
          ) : (
            <div>${currentStyle.original_price}</div>
          )}
        </div>
      </div>
      <StyleSelector styles={styles} currentStyle={currentStyle} />
      <AddToCart />
    </div>
  );
};

export default ProductInformation;
