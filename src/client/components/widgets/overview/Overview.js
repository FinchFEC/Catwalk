import React from "react";
import "../../../assets/scss/overview.scss";
import PhotoCarousel from "./PhotoCarousel.js";
import CurrentPhoto from "./CurrentPhoto.js";

const Overview = () => {
  return (
    <div className="overview-component">
      <div>
        <PhotoCarousel />
      </div>
      <div>
        <CurrentPhoto />
      </div>
    </div>
  );
};

export default Overview;
