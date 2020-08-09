import React from "react";
import "../../../assets/scss/overview.scss";
import PhotoCarousel from "./PhotoCarousel.js";
import CurrentPhoto from "./CurrentPhoto.js";

const Overview = () => {
  return (
    <div className="overview-component">
      <header>
        <p className="announcement">
          SITE-WIDE ANNOUNCEMENT MESSAGE! &mdash; SALE / DISCOUNT OFFER &mdash;
          {" "}
          <a href="">NEW PRODUCT HIGHLIGHT</a>
          {" "}
        </p>
      </header>
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
