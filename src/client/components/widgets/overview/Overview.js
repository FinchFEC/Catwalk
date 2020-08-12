import React from "react";
import "../../../assets/scss/overview.scss";
import PhotoCarousel from "./PhotoCarousel.js";
import CurrentPhoto from "./CurrentPhoto.js";
import ProductInformation from "./ProductInformation.js";
import Description from "./Description.js";

const Overview = () => {
  return (
    <div className="overview-component">
      <CurrentPhoto />
      <PhotoCarousel />
      <ProductInformation />
      <Description />
    </div>
  );
};

export default Overview;
